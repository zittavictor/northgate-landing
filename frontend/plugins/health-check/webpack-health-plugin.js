'use strict';

class WebpackHealthPlugin {
  constructor(options = {}) {
    this.options = options;
    this.status = { state: 'idle', isHealthy: false, hasCompiled: false, errors: [], warnings: [],
      errorCount: 0, warningCount: 0, lastCompileTime: null, lastSuccessTime: null,
      compileDuration: null, totalCompiles: 0, firstCompileTime: null };
  }

  apply(compiler) {
    compiler.hooks.compile.tap('WebpackHealthPlugin', () => {
      this.status.state = 'compiling';
      this.status.isHealthy = false;
      if (!this.status.firstCompileTime) this.status.firstCompileTime = Date.now();
    });

    compiler.hooks.done.tap('WebpackHealthPlugin', (stats) => {
      const now = Date.now();
      this.status.totalCompiles++;
      this.status.lastCompileTime = now;
      this.status.compileDuration = stats.endTime - stats.startTime;
      this.status.errors = stats.compilation.errors.map(e => e.message || String(e));
      this.status.warnings = stats.compilation.warnings.map(w => w.message || String(w));
      this.status.errorCount = this.status.errors.length;
      this.status.warningCount = this.status.warnings.length;

      if (this.status.errorCount === 0) {
        this.status.state = 'success';
        this.status.isHealthy = true;
        this.status.hasCompiled = true;
        this.status.lastSuccessTime = now;
      } else {
        this.status.state = 'error';
        this.status.isHealthy = false;
      }
    });

    compiler.hooks.failed.tap('WebpackHealthPlugin', (error) => {
      this.status.state = 'error';
      this.status.isHealthy = false;
      this.status.errors = [error.message || String(error)];
      this.status.errorCount = 1;
    });
  }

  getStatus() { return { ...this.status }; }
  getSimpleStatus() { return { state: this.status.state, isHealthy: this.status.isHealthy }; }
}

module.exports = WebpackHealthPlugin;
