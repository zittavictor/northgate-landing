// health-endpoints.js
const os = require('os');
const SERVER_START_TIME = Date.now();

function setupHealthEndpoints(devServer, healthPlugin) {
  if (!devServer || !devServer.app) { console.warn('[Health Check] Dev server not available'); return; }
  if (!healthPlugin) { console.warn('[Health Check] Health plugin not provided'); return; }
  console.log('[Health Check] Setting up health endpoints...');

  devServer.app.get("/health", (req, res) => {
    const s = healthPlugin.getStatus();
    const uptime = Date.now() - SERVER_START_TIME;
    const mem = process.memoryUsage();
    res.json({ status: s.isHealthy ? 'healthy' : 'unhealthy', timestamp: new Date().toISOString(),
      uptime: { seconds: Math.floor(uptime/1000), formatted: formatDuration(uptime) },
      webpack: { state: s.state, isHealthy: s.isHealthy, hasCompiled: s.hasCompiled, errors: s.errorCount, warnings: s.warningCount,
        lastCompileTime: s.lastCompileTime ? new Date(s.lastCompileTime).toISOString() : null,
        lastSuccessTime: s.lastSuccessTime ? new Date(s.lastSuccessTime).toISOString() : null,
        compileDuration: s.compileDuration ? `${s.compileDuration}ms` : null,
        totalCompiles: s.totalCompiles, firstCompileTime: s.firstCompileTime ? new Date(s.firstCompileTime).toISOString() : null },
      server: { nodeVersion: process.version, platform: os.platform(), arch: os.arch(), cpus: os.cpus().length,
        memory: { heapUsed: formatBytes(mem.heapUsed), heapTotal: formatBytes(mem.heapTotal), rss: formatBytes(mem.rss), external: formatBytes(mem.external) },
        systemMemory: { total: formatBytes(os.totalmem()), free: formatBytes(os.freemem()), used: formatBytes(os.totalmem()-os.freemem()) } },
      environment: process.env.NODE_ENV || 'development' });
  });

  devServer.app.get("/health/simple", (req, res) => {
    const s = healthPlugin.getSimpleStatus();
    if (s.state === 'success') res.status(200).send('OK');
    else if (s.state === 'compiling') res.status(200).send('COMPILING');
    else if (s.state === 'idle') res.status(200).send('IDLE');
    else res.status(503).send('ERROR');
  });

  devServer.app.get("/health/ready", (req, res) => {
    const s = healthPlugin.getSimpleStatus();
    if (s.state === 'success') res.status(200).json({ ready: true, state: s.state });
    else res.status(503).json({ ready: false, state: s.state, reason: s.state === 'compiling' ? 'Compilation in progress' : 'Compilation failed' });
  });

  devServer.app.get("/health/live", (req, res) => { res.status(200).json({ alive: true, timestamp: new Date().toISOString() }); });
  devServer.app.get("/health/errors", (req, res) => { const s = healthPlugin.getStatus(); res.json({ errorCount: s.errorCount, warningCount: s.warningCount, errors: s.errors, warnings: s.warnings, state: s.state }); });
  devServer.app.get("/health/stats", (req, res) => {
    const s = healthPlugin.getStatus();
    const uptime = Date.now() - SERVER_START_TIME;
    res.json({ totalCompiles: s.totalCompiles, averageCompileTime: s.totalCompiles > 0 ? `${Math.round(uptime/s.totalCompiles)}ms` : null,
      lastCompileDuration: s.compileDuration ? `${s.compileDuration}ms` : null,
      firstCompileTime: s.firstCompileTime ? new Date(s.firstCompileTime).toISOString() : null, serverUptime: formatDuration(uptime) });
  });

  console.log('[Health Check] ✓ Health endpoints ready');
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024, sizes = ['B', 'KB', 'MB', 'GB'], i = Math.floor(Math.log(bytes)/Math.log(k));
  return Math.round(bytes/Math.pow(k,i)*100)/100 + ' ' + sizes[i];
}

function formatDuration(ms) {
  const s = Math.floor(ms/1000), m = Math.floor(s/60), h = Math.floor(m/60);
  if (h > 0) return `${h}h ${m%60}m ${s%60}s`;
  if (m > 0) return `${m}m ${s%60}s`;
  return `${s}s`;
}

module.exports = setupHealthEndpoints;
