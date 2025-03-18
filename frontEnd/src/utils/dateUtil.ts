import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localeData from 'dayjs/plugin/localeData';
import timezone from 'dayjs/plugin/timezone'; // timezone 플러그인 추가
import utc from 'dayjs/plugin/utc'; // timezone 사용하려면 utc도 필요함
import 'dayjs/locale/ko'; // 한국어 로케일

// 플러그인 활성화
dayjs.extend(relativeTime);
dayjs.extend(localeData);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale('ko');

type DateFormat =
    | 'YYYY-MM-DD'
    | 'YYYY년 MM월 DD일'
    | 'YYYY.MM.DD'
    | 'HH:mm:ss'
    | 'YYYY-MM-DD HH:mm:ss'
    | string;

export class DateUtils {
    private static today = dayjs();

    private static parseKoreanDate(date: string | Date) {
        return dayjs(date).tz('Asia/Seoul');
    }

    static dateFormatKR(date: string | Date, format: DateFormat) {
        return this.parseKoreanDate(date).format(format);
    }

    static isAfter(date: string): boolean {
        return this.today.isAfter(this.parseKoreanDate(date), 'day');
    }

    static isBefore(date: string) {
        return this.today.isBefore(this.parseKoreanDate(date), 'day');
    }

    static isSame(date: string) {
        return this.today.isSame(this.parseKoreanDate(date), 'day');
    }

    static isNew(date: string | Date) {
        const diffDays = this.today.diff(this.parseKoreanDate(date), 'day');
        return diffDays >= 0 && diffDays < 7;
    }

    static fromNow(date: string) {
        return this.parseKoreanDate(date).fromNow();
    }
}
