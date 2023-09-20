<template>
    <main>
        <div class="container">

            <h1>Site vitrine Alexandre Baumann (Developpement et SEO)</h1>
            <p>C'est le site sur lequel nous sommes: mon site vitrine, pour exposer mes travaux et prestations. Je vais vous
                présenter ici:</p>
            <ul>
                <li>Discussion sur l'expérience utilisateur</li>
                <li>Les technologies utilisées</li>
                <li>Les fonctionnalités</li>
                <li>Les éléments de style un peu complexes</li>
                <li>Les difficultés rencontrées</li>
            </ul>
            <p>Je vais devoir utiliser le langage technique. Je vous propose donc, avant cela, un résumé compréhensible par
                un
                non-développeur.</p>
            <p>Pour le code, il faut une autorisation (que je vous donnerai évidemment si vous me la demandez):
                https://github.com/AlexandreBaumann/Site-pro</p>
            <h2>Résumé</h2>
            <p>Le présent site utilise Nuxt.js, un framework javascript permettant une expérience de navigation améliorée
                tout en étant optimisé pour le SEO.</p>
            <p>J'ai limité autant que possible l'utilisation de dépendances, pour garder le système relativement simple. Il
                y a quelques fonctionnalités spécifiques: un formulaire de contact, des "modales" (fenêtres qui s'ouvrent et
                occupent l'écran en grisant la page en arrière plan) et l'intégration d'une boucle d'articles (c'est comme
                la liste d'article dans les journaux ou les blogs).</p>
            <p>Le formulaire est l'élément qui a demandé le plus de travail: il a fallu le rendre conforme aux exigences de
                la qualité web (si un champ est mal rempli, l'erreur doit être décrite; il faut un message de validation
                ..), le rendre sécure pour éviter les injections de code et enfin configurer l'envoi de mail.</p>

            <h2>Discussion sur l'expérience utilisateur</h2>
            <p>Le site a pour objet de me vendre comme développeur et SEO en me présentant avec mon portfolio.</p>
            <p>Il respecte les standards de qualité web. Par exemple, les éléments actionnables changent au survol, les
                onglets actifs de
                menu sont soulignés, les icones et boutons sont assortis d'aria-labels e</p>
            <p>La page contact est un peu particulière. Classiquement, c'est une page qui pose des problèmes sur le plan du
                SEO, car elle est vide et va être trop mise en avant par les liens interne. De plus, je trouve risqué de
                placer son numéro de téléphone et mail en plein texte, ces informations pouvant facilement être récupérées
                par un robot ("crawler"). Une option pour l'éviter est de la transformer en modale. C'est ce que j'ai fait
                pour discoverthegreentech. Je le fais également ici avec les icônes "Contactez-moi" qui, au lieu de renvoyer
                vers la page contact, ouvrent une modale. Cela me semble également préférable en termes d'expérience
                utilisateur, permettant de rapidement revenir sur le contenu qu'on lisait.
            </p>
            <p>Néanmoins, les utilisateurs s'attendent à avoir une page contact à part entière pour un site vitrine. J'ai
                donc créé une page et, pour les protéger des robots, placé le numéro de
                téléphonie et le mail derrière un script: il suffit de cliquer sur l'icône téléphone ou mail pour que la
                coordonnée souhaitée s'affiche. On reste accessible aux lecteurs d'écran en utilisant des éléments boutons
                et des aria-labels explicites.</p>
            <p>Le formulaire est évidemment sécurisé côté backend, avec une retraitement de la requête pour éviter les
                injections et vérifier que tous les champs sont remplis (et écarter les robots grâce au honeypot). Le
                frontend gère les messages d'erreurs précisant à l'utilisateur s'il y a une erreur.</p>
            <p>Il faut encore que je conçoive les pages "prestations", qui vont préciser mon offre.</p>

            <h2>Présentation des technologies utilisées</h2>
            <h3>Nuxt.js</h3>
            <p>Le site est codé sous Nuxt.js, un framework javascript basé sur Vue.js. </p>
            <p>Vue est un framework Javascript "single page application" (SPA), comme React et Angular, ce qui garantit une
                expérience
                d'utilisation extrêmement fluide. Il a pour particularité
                d'avoir trois parties à ces composants: le HTML, le script et le style. Cela évite
                notamment d'avoir un fichier de style pour chaque composant. Sa syntaxe est particulièrement concise.</p>
            <p>Néanmoins, le rendu des SPA étant entièrement généré avec javascript, c'est peu compatible avec le SEO. C'est
                pour cela qu'on été développé des solutions pour générer le rendu côté serveur ("Server Side Rendering") ou
                sous
                forme d'export statique (HTML, CSS, Json et Javascript). C'est ce que permet Nuxt.js. Pour le présent site,
                j'ai
                fait le choix de l'export statique, plus simple et suffisant.</p>
            <h3>Dépendances</h3>
            <p>Parmi les dépendances, il y a notamment:</p>
            <ul>
                <li>La suite <strong>@fortawesome</strong>, pour utiliser les icones Fontawesome.</li>
                <li><strong>Sass</strong> et <strong>sass-loader</strong> pour gérer le SCSS.</li>
                <li><strong>Prettier</strong> pour le formattage automatique de tout sauf des fichiers .vue et Volar pour
                    ces
                    derniers.</li>
                <li><strong>Nodemailer</strong> pour gérer l'envoi d'email avec le formulaire de contact.</li>
            </ul>
            <p>J'utilise également Typescript pour avoir un code plus propre.</p>
            <h3>Autres</h3>
            <p>J'utilise le <strong>SCSS</strong> pour le style. Notez que si on veut
                l'utiliser dans
                les parties "style" des composants, il faut ajouter "lang="scss"" à
                l'intérieur.</p>
            <p>La base de donnée, étant très simple, est juste un <strong>fichier json</strong> déposé dans le dossier
                static.
                C'est la solution
                la plus simple, qui me permet de facilement ajouter et modifier ses éléments.</p>
            <h2>Fonctionnalités</h2>
            <p>Les types de fonctionnalités sont les <strong>modales</strong>, le <strong>formulaire de contact</strong> et
                la
                <strong>gestion des métadonnées.</strong>.
            </p>
            <h3>Les modales</h3>
            <p>Il y a plusieurs modales:</p>
            <ul>
                <li>Les boutons <strong>"contact"</strong> dans le menu et dans la Home déclenchent l'apparition d'une
                    modale
                    contenant le
                    formulaire de contact. Lorsqu'il est correctement rempli, il est remplacé par un message de validation
                    et un
                    bouton pour fermer la modale. Elle peut se fermer en cliquant dans la zone grisée, à l'extérieur d'elle.
                </li>
                <li>Les <strong>"cards"</strong> représentant les projets du portfolio permettent l'ouverture d'une modale
                    où le
                    projet est plus
                    précisément décrit, avec un lien permettant de voir la page dédiée.</li>
            </ul>
            <p>Elles sont gérées avec des "state".</p>
            <h3>Le formulaire</h3>
            <p>Le formulaire se divise en deux fichiers: le composant côté client', Form.vue, et le fichier
                côté serveur qui traite les données qu'il envoie.</p>
            <h4>Le formulaire lui-même</h4>
            <p>Il y a ce qu'on s'attend à voir sur un formulaire:</p>
            <ul>
                <li>Si vous oubliez un champ ou ne renseignez pas un email, vous avez un message d'erreur précisant la
                    nature de
                    l'erreur.</li>
                <li>Vous devez accepter la politique de confidentialité pour envoyer le message.</li>
                <li>Si l'envoi est valide, vous avez un message de validation qui apparait. Si le formulaire est dans une
                    modale, à la place du formulaire s'affiche un message de validation et un bouton pour fermer la modale.
                </li>
            </ul>
            <p>Pour lutter contre le SPAM, j'ai mis en place un honeypot: une division invisible à l'utilisateur, qui est en
                dehors du champ de l'écran. La renseigner va renvoyer une réponse 200, mais le contenu du formulaire ne
                sera pas transmis. J'aurais pu utiliser la propriété "display:hidden", mais je pense que c'est trop
                facile à contourner pour un robot. </p>
            <h4>Traitement de la requête et envoi du mail</h4>
            <p>Mettre en place le système d'envoi de mail a été la principale difficulté.
                Il fallait mettre en place un script accueillant le message et envoyant le mail au compte de
                l'administrateur.
                Il y a plusieurs éléments. </p>
            <ul>
                <li>Tout d'abord, il fallait "connecter" au endpoint le fichier qui allait traiter la demande. La
                    manipulation
                    est extrêmement simple, puisqu'il suffit de renseigner le chemin dans le fichier de configuration
                    (nuxt.config.js), sous "serverMiddleware".</li>
                <li>Le endpoint étant rattaché, il fallait empêcher les risques d'injection par le formulaire. Le message
                    est
                    donc retraité par deux dépendances pour être sécurisé.</li>
                <li>Enfin, pour envoyer le mail, j'ai utilisé Nodemailer et configuré le SMTP de mon hébergement O2Switch.
                </li>
            </ul>

            <h3>La boucle de cartes</h3>
            <p>C'est une fonctionnalité extrêmement simple à coder sous Vue. En effet, il suffit de ce petit bout de code:
                &lt;Card v-for="cardData in $store.state.data.data" :key="cardData._id" :card="cardData" /&gt; />
            </p>
            <p>cela affiche un composant Card pour chaque objet dans l'objet "data" du store.</p>
            <p>La spécificité est l'utilisation d'un "store", qui permet de gérer la base de données (le fichier json)
                pour l'ensemble de l'application. Dans l'exemple, on prend toute la base. Néanmoins, dans la page d'accueil,
                on
                fait la même en utilisant un "getter", c'est à dire qu'on a retravaillé ladite base. On en extrait les 3
                projets
                avec la propriété "interet" la plus élevée. Cela se passe dans data.js dans le dossier store.</p>


            <h2>Le style</h2>

            <h3>Le cadre et classe récurrente</h3>
            <p>J'utilise un mixin pour avoir un cadre cohérent de contenu (une largeur maximale et des espaces sur les
                côtés).
                J'aurais également pu utiliser une classe. C'est d'ailleurs la solution que j'ai adoptée pour avoir des
                sections
                dont la hauteur prend l'écran moins la hauteur du header. C'est la classe "fullheightdiv" dans
                assets/styles/main.scss.
            </p>

            <h3>La modale</h3>
            <p>Le style des modales est très simple: on affiche une division avec la classe "modal", avec une position:fixed
                et
                qui prend tout l'écran. Elle a comme background-color un noir transparent. Ensuite on a, à l'intérieur, la
                division de classe "modal-content" qui va accueillir le contenu.</p>

            <h2>Difficultés rencontrées</h2>
            <h3>Sur le fonctionnement</h3>
            <p>Le formulaire a posé quelques difficultés.</p>
            <p>La première fois que j'ai testé, j'ai obtenu une erreur: webpack ne trouvait pas des dépendances de
                Node utilisées par Nodemailer, comme fs (=file system). En fait, il s'agissait de dépendances côté serveur,
                qu'il cherchait dans le bundle client. C'est qu'en fait il avait inclus dans ce dernier le fichier de
                gestion du
                formulaire, alors qu'il ne devait s'exécuté que côté serveur. Le problème était mon choix de nom: j'avais
                mis
                mon script dans un dossier "middleware", alors qu'il fallait le mettre dans un dossier "serverMiddleware".
                C'est
                en fait un détail lié au paramétrage de Nuxt.</p>
            <p>Second bug, lorsque j'envoyais le formulaire, j'obtenais "Cannot destructure property 'firstName' of
                'req.body'
                as it is undefined.". En plaçant "console.log(req.body)
                " au début de mon script de traitement du formulaire, j'obtenais "undefined". Visiblement il fallait un
                parser
                pour analyser correctement le corps de la requête. J'ai implémanté bodyparser et ça a marché.</p>
            <p>Le formulaire n'est néanmoins pas actif actuellement, vu que le site est statique. Je pourrais faire comme
                avec chemins-de-vie et utiliser la version "server side rendering" au lieu de la version statique, mais cela
                suppose une adaptation un peu lourde. De plus, je ne souhaite pas être "coincés" par ce point à chaque fois
                que j'expérimente une nouvelle technologie. Je vais probablement, à la place, créer un serveur dédié qui me
                servira pour
                tous mes formulaires.</p>
            <h3>Sur la mise en page</h3>
            <p>J'avais tenté d'animer le bouton CTA de la page d'accueil comme mes autres boutons, avec un petit effet quand
                on passe la souris dessus. Néanmoins, cela s'est très mal combiné avec la modale qu'il déclenchait.
                L'affichage de cette dernière a lourdement dysfonctionné: elle alternait très rapidement entre son affichage
                "normal" et un affichage altéré lorsqu'on passait la souris dessus. </p>
            <h4>Autres détails</h4>
            <p>J'ai été confronté à quelques autres difficultés, plus mineures, liées à ma découverte de Nuxt:</p>
            <ul>
                <li>Pour implémenter le scss dans les balises "style" des composants, il faut spécifier "lang="scss"" à
                    l'intérieur.</li>
                <li>La page <i>"/portfolio"</i> devait se trouver sous le nom <i>"index.vue"</i> dans le sous-dossier
                    <i>"portfolio"</i> pour ne pas
                    empêcher l'accès aux pages filles (comme la présente page), et non pas sous le nom <i>"porfolio.vue"</i>
                    dans le dossier <i>"Pages"</i>.
                </li>
            </ul>
        </div>
    </main>
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
  