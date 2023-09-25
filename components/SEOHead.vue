<template>
    <div />
</template>
  
<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters('data', ['getMetaData']),
        pageKey() {
            return this.$route.path;
        },
        metaData() {
            return this.getMetaData(this.pageKey);
        },
    },
    head() {
        if (!this.metaData) return {};
        const schema = {
            "@context": "http://schema.org",
            "@type": "WebPage",
            "name": "Alexandre Baumann - Développeur Web & Consultant SEO",
            "url": `https://pro.alexandrebaumann.com${this.metaData.url}/`,
            "sameAs": [
                "https://www.linkedin.com/in/alexandre-baumann-b032388a/",
            ],
            "description": "Consultant SEO et développeur web. Spécialisé en Vue.js, Nuxt.js, SEO, CSS, HTML, et SCSS. Alumni de OpenClassRoom.",
            "inLanguage": "fr",
            "image": "https://media.licdn.com/dms/image/C4D03AQH7-q1DBCDoJw/profile-displayphoto-shrink_200_200/0/1586881830721?e=1697068800&v=beta&t=g7xz8j_o8oJZj0-8LIjTOrt62NCBk79Fm7uTvYiaHSU",
            "creator": {
                "@type": "Person",
                "name": "Alexandre Baumann",
                "jobTitle": ["Développeur Web", "Consultant SEO"],
                "knowsAbout": ["Développement Web", "Vue.js", "Nuxt.js", "SEO", "CSS", "HTML", "SCSS", "SEO", "Redaction Web", "Redaction SEO"],
                "alumniOf": "OpenClassRooms",
                "email": "contact@alexandrebaumann.com",
            }
        };

        return {
            title: this.metaData.title,
            link: [
                { rel: 'canonical', href: `https://pro.alexandrebaumann.com${this.$route.path === '/' ? '' : this.metaData.url + '/'}` },
                { rel: 'icon', type: 'image/x-icon', href: '/favicon2.png' }
            ],
            htmlAttrs: {
                lang: 'fr',
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'format-detection', content: 'telephone=no' },

                {
                    hid: 'description',
                    name: 'description',
                    content: this.metaData.description,
                },
                { name: 'author', content: 'Alexandre Baumann' },
                { name: 'publisher', content: 'Alexandre Baumann' },
                { property: 'og:site_name', content: 'Alexandre Baumann - Site professionnel' },
                { property: 'og:title', content: this.metaData.title },
                { property: 'og:description', content: this.metaData.description },
            ],
            script: [
                {
                    hid: 'ldjson-schema',
                    type: 'application/ld+json',
                    json: schema
                }
            ]
        };
    },
};

</script>
  