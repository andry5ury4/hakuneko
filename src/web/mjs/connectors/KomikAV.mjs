import WordPressMangastream from './templates/WordPressMangastream.mjs';

export default class KomikAV extends WordPressMangastream {

    constructor() {
        super();
        super.id = 'komikav';
        super.label = 'KomikAV';
        this.tags = [ 'manga', 'indonesian' ];
        this.url = 'https://komikav.com';
        this.path = '/manga/list-mode/';

        this.queryChapters = 'div#chapterlist ul li div.eph-num a';
        this.queryChaptersTitle = 'span.chapternum';
    }
}