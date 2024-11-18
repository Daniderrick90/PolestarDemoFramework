export class ErrorHandler {
    /**
     * Logs the error and throws it with a meaningful message.
     * @param {Error} error - The original error object.
     * @param {string} message - A custom message to provide more context.
     */
    static handleError(error: any, message: string): never {
      console.error(`${message}: ${error.message}`);
      console.error("Stack trace:", error.stack);
      throw new Error(`${message}: ${error.message}`);
    }
  }