<template>
    <div class="container">

        <h1>Site vitrine Alexandre Baumann (Developpement et SEO)</h1>
        <h2>Présentation des technologies utilisées</h2>
        <h2>Fonctionnalités</h2>
        <h3>Les modales</h3>
        <p>Il y a plusieurs modales:</p>
        <ul>
            <li>Le bouton "contact" dans le menu et dans l'appel à ac</li>
        </ul>
        <h3>Le formulaire</h3>
        <p>Le formulaire se divise en deux fichiers: le formulaire à proprement parler, le composant Form.vue, et le fichier
            côté serveur qui traite les données qu'il envoie.</p>
        <h4>Le formulaire lui-même</h4>
        <p>Il y a ce qu'on s'attend à voir sur un formulaire:</p>
        <ul>
            <li>Si vous oubliez un champ ou ne renseignez pas un email, vous avez un message d'erreur précisant la nature de
                l'erreur.</li>
            <li>Vous devez accepter la politique de confidentialité pour envoyer le message.</li>
            <li>Si l'envoi est valide, vous avez </li>
        </ul>
        <p>Pour lutter contre le SPAM, j'ai mis en place un honeypot: une division invisible à l'utilisateur, qui est en
            dehors du champ de l'écran. J'aurais pu utiliser la propriété "display:hidden", mais je pense que c'est trop
            facile à contourner pour un robot. La renseigner va renvoyer une réponse 200, mais le contenu du formulaire ne
            sera pas transmis.</p>
        <h4>Traitement de la requête et envoi du mail</h4>
        <p>Mettre en place le système d'envoi de mail a été la principale difficulté.
            Il fallait mettre en place un script accueillant le message et envoyant le mail au compte de l'administrateur.
            Il y a plusieurs éléments. </p>
        <ul>
            <li>Tout d'abord, il fallait "connecter" au endpoint le fichier qui allait traiter la demande. La manipulation
                est extrêmement simple, puisqu'il suffit de renseigner le chemin dans le fichier de configuration
                (nuxt.config.js), sous "serverMiddleware".</li>
            <li>Le endpoint étant rattaché, il fallait empêcher les risques d'injection par le formulaire. Le message est
                donc retraité par deux dépendances pour être sécurisé.</li>
            <li>Enfin, pour envoyer le mail, j'ai utilisé Nodemailer et configuré le SMTP de mon hébergement O2Switch.</li>
        </ul>

        <h3>La boucle de cartes</h3>

        <h2>Difficultés rencontrées</h2>
        <h3>Sur le fonctionnement</h3>
        <p>Le formulaire a posé quelques difficultés.</p>
        <p>La première fois que j'ai testé, j'ai obtenu une erreur: webpack ne trouvait pas des dépendances de
            Node utilisées par Nodemailer, comme fs (=file system). En fait, il s'agissait de dépendances côté serveur,
            qu'il cherchait dans le bundle client. C'est qu'en fait il avait inclus dans ce dernier le fichier de gestion du
            formulaire, alors qu'il ne devait s'exécuté que côté serveur. Le problème était mon choix de nom: j'avais mis
            mon script dans un dossier "middleware", alors qu'il fallait le mettre dans un dossier "serverMiddleware". C'est
            en fait un détail lié au paramétrage de Nuxt.</p>
        <p>Second bug, lorsque j'envoyais le formulaire, j'obtenais "Cannot destructure property 'firstName' of 'req.body'
            as it is undefined.". En plaçant "console.log(req.body)
            " au début de mon script de traitement du formulaire, j'obtenais "undefined". Visiblement il fallait un parser
            pour analyser correctement le corps de la requête. J'ai implémanté bodyparser et ça a marché.</p>
        <h3>Sur la mise en page</h3>
        <h4>Autres détails</h4>
        <p>J'ai été confronté à quelques autres difficultés, plus mineures, liées à ma découverte de Nuxt:</p>
        <ul>
            <li>Pour implémenter le scss dans les balises "style" des composants, il faut spécifier " lang="scss" " à
                l'intérieur.</li>
            <li>La page <i>"/portfolio"</i> devait se trouver sous le nom <i>"index.vue"</i> dans le sous-dossier
                <i>"portfolio"</i> pour ne pas
                empêcher l'accès aux pages filles (comme la présente page), et non pas sous le nom <i>"porfolio.vue"</i>
                dans le dossier <i>"Pages"</i>.
            </li>
        </ul>
    </div>
</template>
  
<script>
export default {
}
</script>
  
<style scoped lang="scss">
.container {
    @include contentFrame;

    h1 {
        text-align: center;
        font-size: 40px;
        padding-top: 50px;

    }

}
</style>
  