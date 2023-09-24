<template>
    <main>
        <h2>Propriétaire</h2>
        <p>
            Le propriétaire du présent site est Alexandre Baumann.
            <br />
            Il est joignable par les moyens proposés dans notre page <nuxt-link to="/contact/">Contact</nuxt-link>.
        </p>
        <h2>Hébergement</h2>
        <p>
            L’adresse de notre site Web est : https://www.pro.alexandrebaumann.com/.
        </p>
        <p>
            Il est hébergé par : <br />
            SARL o2switch
            <br />
            224 BD Gustave Flaubert, 63000 Clermont-Ferrand
            <br />
            SIRET : 510 909 80700024
            <br />
            Tel : 04 44 44 60 40
        </p>
    </main>
</template>
    
<script>
export default {
}
</script>
    
<style scoped lang="scss">
@import '~/assets/variables.scss';

main {
    @include contentFrame;

}
</style>
    