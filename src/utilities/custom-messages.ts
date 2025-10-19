export class CustomMessages {
    
    emptyDataMessage(subject: string): string {
        return `Oops! It seems there is no data available for "${subject}" at the moment. Please check and try again.`;
    }

    uncaughtExceptionMessage(subject: string): string {
        return `An uncaught exception occurred while processing "${subject}". Please try again or contact support.`;
      }

    
    
}