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
            "@type": "Person",
            "name": "Alexandre Baumann",
            "url": `https://pro.alexandrebaumann.com${this.metaData.url}`,
            "sameAs": [
                "https://www.linkedin.com/in/alexandre-baumann-b032388a/",
            ],
            "jobTitle": ["Développeur Web", "Consultant SEO"],
            "description": "Consultant SEO et développeur web",
            "alumniOf": "OpenClassRoom",
            "email": "contact@alexandrebaumann.com",
            "knowsAbout": ["Développement Web", "Vue.js", "Nuxt.js", "SEO", "CSS", "HTML", "SCSS"],
            "image": "https://media.licdn.com/dms/image/C4D03AQH7-q1DBCDoJw/profile-displayphoto-shrink_200_200/0/1586881830721?e=1697068800&v=beta&t=g7xz8j_o8oJZj0-8LIjTOrt62NCBk79Fm7uTvYiaHSU",
        };
        return {
            title: this.metaData.title,
            link: [
                { rel: 'canonical', href: `https://pro.alexandrebaumann.com${this.metaData.url}` }
            ],
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.metaData.description,
                },
                { name: 'author', content: 'Alexandre Baumann' },  // Auteur du site
                { name: 'publisher', content: 'Alexandre Baumann' },  // Éditeur du site
                { name: 'og:site_name', content: 'Alexandre Baumann - Site professionnel' },  // Nom du site pour Open Graph (réseaux sociaux)
                { name: 'og:title', content: this.metaData.title },  // Titre pour Open Graph
                { name: 'og:description', content: this.metaData.description },  // Description pour Open Graph
            ],
        };
    },
};

</script>
  