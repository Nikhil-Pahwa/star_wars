import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {
    transform(date: string): string {
        let timeStr: string = new Date(date).toDateString();
        return this.splice(timeStr, 3, 0, ",");
    }

    splice(srcString, idx, rem, str): string {
        return srcString.slice(0, idx) + str + srcString.slice(idx + Math.abs(rem));
    };
}
