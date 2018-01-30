export class Schedule {
    private dateStr: string;
    private title: string;
    constructor(dateStr: string, title: string) {
        this.dateStr = dateStr;
        this.title = title;
    }
    getDateStr(): string {
      return this.dateStr;
    }
    getTitle(): string {
      return this.title;
    }
}
