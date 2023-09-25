<template>
    <main>
        <div class="container">

            <h1>Site vitrine Alexandre Baumann (Developpement et SEO)</h1>
            <p>Le présent site utilise Nuxt.js, un framework javascript permettant une expérience de navigation améliorée
                tout en étant optimisé pour le SEO.</p>
            <p>C'est un site vitrine, ayant pour objet de présenter mes compétences en SEO et développement web et d'inviter
                l'utilisateur à me contacter.
                Il y a donc logiquement un formulaire de contact. Il y a également plusieurs fonctionnalités pour améliorer
                le référencement
                naturel et, surtout, pour améliorer l'expérience utilisateur. Il y a ainsi plusieurs modales, qui permettent
                de consulter
                un contenu sans rompre le fil de la navigation. Le slider ci-dessous est également conçu dans cette optique.
            </p>

            <p>Je vais vous
                présenter ici:</p>
            <ul>
                <li>Description du parcours utilisateur</li>
                <li>Les technologies utilisées</li>
                <li>Les fonctionnalités</li>
                <li>Les difficultés rencontrées</li>
                <li>Les perspectives d'amélioration</li>

            </ul>
            <p>Pour le code, il faut une autorisation (que je vous donnerai évidemment si vous me la demandez):
                https://github.com/AlexandreBaumann/Site-pro</p>

            <Slide :slides="mesSlides" />

        </div>
    </main>
</template>
  
<script>
import Slide from '@/components/Form.vue';

export default {
    data() {
        return {
            mesSlides: [
                {
                    title: 'Introduction', content: `<p>Le site a pour objet de me vendre comme développeur et SEO en me présentant avec mon portfolio. 
                        Je présenterai ici les technologies utilisées (Nuxt et dépendances), les difficultés rencontrées ainsi que les fonctionnalités :</p>
                        <ul>
                            <li>Le store (gestion des données)</li>
                            <li>Formulaire de contact</li>
                            <li>Sliders</li>
                            <li>Gestion des métadonnées</li>
                            <li>Cartes et modales</li>
                        </ul>
                        <p>Mais, avant cela, nous allons faire un point sur le parcours utilisateur.</p>`
                },
                {
                    title: 'UX', content: `<h2>Le parcours utilisateur</h2>
            <p>Ce site a pour objet de promouvoir mes service à essentiellement deux types de cibles:</p>
                <ul>
                    <li>Les <strong>spécialistes</strong> (agences et recruteurs indépendants) pour lesquelles je dois mettre en avant mes projets les plus 
                        complexes (avec la justification de cette complexité) en réussissant à rendre leur explication facile à comprendre.</li>
                    <li>Les <strong>entrepreneurs</strong>, qui ont besoin de quelqu'un pour améliorer leur visibilité web (SEO ou développement), pour lesquels
                        je dois mettre en avant des projets qui sont susceptibles de leur faire se dire "ah c'est ça qu'il me faudrait".</li>
                </ul>
            <p>L'action attendue est soit d'<strong>apporter de l'information</strong> si le contact a déjà été établi avant, soit de <strong>déclencher le contact</strong>.
                Le point d'entrée se fera essentiellement sur la page d'accueil, sauf pour d'occasionnels visiteurs qui viendront de mes articles
                de blog sur uniteinnovation.com (qui ne font du reste pas directement partie de ma cible).</p>
            <p>La page d'accueil est donc structurée dans cette logique : on présente la <strong>valeur ajoutée</strong> globale (améliorer la visibilité), on
                la précise, puis elle est rattachée à mes services, puis un premier <strong>bouton contact</strong> est proposé. Ce dernier ne renvoie pas vers la page contact,
                mais ouvre une modale avec un formulaire de contact, de sorte à ne pas rompre la navigation. En effet, à ce stade, le lecteur
                peut encore vouloir voir le <strong>portfolio</strong>. Juste après, on trouve justement un extrait du portfolio avec 3 cartes et un lien
                vers le portfolio. Les cartes ouvrent des modales détaillant un peu plus le projet (et permettant d'accéder à sa page complète), 
                encore une fois pour ne pas rompre la navigation et ne pas perdre l'utilisateur. La page se finit sur un <strong>formulaire de contact</strong>.</p>
            <p>L'autre page importante est le <strong>portfolio</strong>. Ici, il s'agit de mettre à disposition les différents projets selon un filtre, permettant
                de limiter l'affichage aux projets SEO ou de développement. Les cartes renvoient cette fois directement à la page concernée. En effet,
                l'utilisateur sait "où il est" vu qu'il a déjà été sur la page portfolio et il n'y a pas de parcours vers le formulaire qui serait interrompu.</p>
            <p>Enfin, la page contact a une petite particularité: les coordonnées sont derrière un bouton (il faut cliquer et une modale s'affiche).
                Cela permet d'éviter que les robots ne les détectent. J'avais envisagé de n'utiliser qu'une modale, comme pour le bouton "Contact"
                en page d'accueil, mais les utilisateurs s'attendent à avoir une page contact à part entière pour un site vitrine. </p> 
            <p>Pour clarifier autant que possible la navigation, tous les éléments cliquables sont marqués comme tel, avec en plus une animation au 
                survol, et la page active est soulignée dans les menus. </p>
            <p>Il est responsive et accessible: les icones et boutons sont assortis d'aria-labels, les images d'attributs alt et il peut être parcouru au clavier.
                Il faut néanmoins que je vérifie si les modales sont accessibles aux lecteurs d'écran.</p> 

            ` },
                {
                    title: 'Technologie utilisée', content: `<h2>Présentation des technologies utilisées</h2>
            <h3>Nuxt.js</h3>
            <p>Le site est codé sous <strong>Nuxt.js</strong>, un framework javascript basé sur <strong>Vue.js</strong>. </p>
            <p>Vue est un framework Javascript "single page application" (SPA), comme React et Angular, ce qui garantit une
                expérience
                d'utilisation extrêmement fluide. Il a pour particularité
                d'avoir trois parties à ces composants: le HTML, le script et le style. Cela évite
                notamment d'avoir un fichier de style pour chaque composant. Sa syntaxe est particulièrement concise.</p>
            <p>Néanmoins, le rendu des SPA étant entièrement généré avec <strong>javascript</strong>, ils ne sont pas nativement compatibles avec le SEO. C'est
                pour cela qu'on été développé des solutions pour générer le rendu côté serveur ("Server Side Rendering") ou
                sous forme d'export statique (HTML, CSS, Json et Javascript), comme Nuxt.js. Pour le présent site,
                j'ai  fait le choix de l'<strong>export statique</strong>, plus simple en termes d'hébergement.</p>
            
            ` },
                {
                    title: 'Technologie utilisée', content: `<h3>Dépendances</h3>
            <p>Parmi les dépendances, il y a notamment:</p>
            <ul>
                <li>La suite <strong>@fortawesome</strong>, pour utiliser les icones Fontawesome.</li>
                <li><strong>Sass</strong> et <strong>sass-loader</strong> pour gérer le SCSS.</li>
                <li><strong>Prettier</strong> pour le formattage automatique de tout sauf des fichiers .vue et <strong>Volar</strong> pour
                    ces derniers.</li>
            <li><strong>dotenv</strong> pour stocker les variables d'environnement (l'identification)</li>
                </ul>
            <p>J'utilise également esLint pour avoir un code plus propre.</p>
            <h3>Autres</h3>
            <p>J'utilise le <strong>SCSS</strong> pour le style.  </p>
            <p>La base de donnée, étant très simple, est consistuée de <strong>fichiers json</strong> déposé dans le dossier
                static.  C'est la solution la plus flexible, qui me permet de facilement ajouter et modifier ses éléments.</p>` },
                {
                    title: 'Fonctionnalités', content: `<h2>Les différentes fonctionnalités</h2>
                <p>Le site a plusieurs fonctionnalités:</p>
                <ul>
                    <li>Le store, pour la gestion des données</li>
                    <li>Le formulaire de contact</li>
                    <li>Le slider (l'élément que vous consultez actuellement)</li>
                    <li>La gestion des métadonnées</li>
                    <li>Les boucles et filtres</li>
                    <li>Les cartes et modales</li>
                </ul>
                <p>Nous allons vous les présenter successivement.</p>
                
                ` },
                {
                    title: 'Fonctionnalités', content: `<h3>Le Store (gestion des données)</h3>
                <p>Dans les applications basées sur <strong>React</strong> et <strong>Vue</strong>, il est parfois difficile de gérer
                    la disponibilité des données et des variables, le système fonctionnant par composant (une
                    donnée chargée dans un composant n'est pas disponible par défaut dans un autre).</p>
                <p>Ayant déjà rencontré le problème dans mon projet <a href="/portfolio/site-information-alternative-hydrogene">Alternative-Hydrogène</a>
                    , j'ai préféré anticiper et développer directement un store global pour des données qui
                    concernent l'ensemble du site: les métadonnées des pages et les caractéristiques du portfolio. </p>
               <p>Nuxt a une fonctionnalité prédéfinie pour cela, utilisant Vuex: il suffit de créer
                un dossier <strong>"store"</strong> avec un fichier javascript (avec le bon contenu) dedans. En le configurant
                de manière adéquate, on peut ensuite récupérer les données qu'il définit dans toute l'application.</p> 
                <div class="col2 equilibre">
                    <div>
                        <p>Il faut d'abord importer les données (ici meta et metadata), puis on les stocke dans le "
                            state"  du store. Ensuite on définit des "getters", des fonctions permettant de récupérer
                            une valeur calculée à partir du "state" du store. Ici il y en a deux:</p>
                            <ul>
                                <li><strong>topInterestProjects</strong> classe les projets par intérêt et ne garde que les trois premiers.</li>
                                <li><strong>getMetaData</strong> prend une url en argument, cherche dans l'objet méta une correspondance 
                                    et retourne l'objet correspondant (ou un objet vide s'il n'y en a pas).</li>
                            </ul>
                            <p>Cela permet de centraliser et de réutiliser les opérations. De plus, le getter
                                est mis en cache, il pourra donc être plus rapidement appelé par la suite.</p>
                    </div>
                    <code>
                        import data from '../assets/portfolio.json'
                        import metaData from '../assets/meta.json'

                        export const state = () => ({
                            data: data,
                            metaData: metaData,
                        })

                        export const getters = {
                            topInterestProjects: (state) => {
                                return [...state.data].sort((a, b) => b.interet - a.interet).slice(0, 3)
                            },
                            getMetaData: (state) => (url) => {
                                return state.metaData.find((meta) => meta.url === url) || {}
                            },
                        }
                    </code>
                </div>

                <div class="col2">
                    <div>
                        <p>Ensuite, il est appelé dans plusieurs composant, dont notamment <strong>SEOHead</strong>, 
                            qui définit les métadonnées. Le bloc de code ci-contre commence par 
                            "mapper" le getter getMetaData du module "data" (le nom du fichier js dans
                            le store), puis, après avoir défini pageKey pour retourner la route de la page
                            qui va monter le composant, il va l'utiliser comme argument de getMetaData pour
                            retourner l'objet dont l'url correspond à pageKey.</p>
                            <p>Cela permet, ensuite, d'utiliser cet objet pour modifier l'élément Head de la page,
                                que définit le présent composant.</p>
                    </div>
                    <code>
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
                    </code>
                </div>
                ` },
                {
                    title: 'Fonctionnalités', content: `<h3>Formulaire de Contact</h3>
          
            <p>Le formulaire se divise en deux fichiers: le composant <strong>côté client</strong>, Form.vue, et le fichier
                <strong>côté serveur</strong> qui traite les données qu'il envoie. Pour ce dernier, j'utilise un serveur externe.</p>
            <p>S'agissant du formulaire lui-même, il y a ce qu'on s'attend à voir sur un formulaire:</p>
            <ul>
                <li>Si vous oubliez un champ ou ne renseignez pas un email, vous avez un message d'erreur précisant la
                    nature de l'erreur.</li>
                <li>Vous devez accepter la politique de confidentialité pour envoyer le message.</li>
                <li>Si l'envoi est valide, vous avez un <strong>message de validation</strong> qui apparait. Si le formulaire est dans une
                    modale, à la place du formulaire s'affiche un message de validation et un bouton pour fermer la modale.
                </li>
            </ul>
            <p>Pour lutter contre le SPAM, j'ai mis en place un honeypot: une division invisible à l'utilisateur, qui est en
                dehors du champ de l'écran. La renseigner va renvoyer une réponse 200, mais le contenu du formulaire ne
                sera pas transmis.</p>
            <p>Mettre en place le système d'envoi de mail a été la principale difficulté.
                Il fallait mettre en place un script accueillant le message et envoyant le mail au compte de
                l'administrateur. Pour le traitement de la demande, j'utilise un serveur externe que j'ai créé. Il utilise Nodemailer et un serveur SMTP
                pour envoyer le mail, ainsi que plusieurs dépendances pour prévenir les risques d'injection de code malfaisant.</p>
                ` },
                {
                    title: 'Fonctionnalités', content: `<h3>Sliders</h3>
                <p>Le <strong>slider</strong> (composant Slide) permet d'afficher dans un cadre plusieurs blocs de html,
                    ce qui rend plus agréable la navigation et la lecture.</p>
                    <p>C'est un composant assez simple: 
                        <ul>
                            <li>un <strong>tableau</strong> lui est passé en props, avec des objets composé d'un titre (title)
                        et du contenu (content) de la slide.</li>
                            <li>Il utilise le state "currentSlideIndex", initialisé à 0, pour
                                définir quel <strong>objet du tableau</strong> s'affiche.</li>
                            <li>Les <strong>boutons à gauche et droite</strong> de la slide déclenchent les fonctions prevSlide ou
                                nextSlide, qui réduisent ou augmentent l'index de 1.</li>
                            <li>Le premier est <strong>caché</strong> si l'index est de 0 et le second si l'index est de la longueur
                                du tableau - 1 (cette dernière "commence" à 1, alors que l'index commence à 0).</li>
                            <li>Les points en dessous des slides permettent de savoir quelle est la slide active.
                                De plus, cliquer sur l'un d'eux déclenche une fonction donnant à "currentSlideIndex"
                                l'index du bouton cliqué (en d'autres termes, cela affiche la slide correspondante). Ils aident la <strong>navigation</strong>. </li>
                        </ul>
 
                    ` },
                {
                    title: 'Fonctionnalités', content: `<h3>Gestion des Métadonnées</h3>
                <p>Nous l'avons évoqué plus haut, il y a un composant qui ajoute les métadonnées
                    des pages web en les récupérant du store: <strong>SEOHead</strong>.</p>
                    <p>Il utilise la méthode head() pour injecter les métadonnées dans la balise Head. Cela
                        inclut le balisage schema correspondant au site et à son auteur, ainsi que d'autres
                        plus spécifiques à la page, comme le titre, l'url canonical et la méta-description.</p>
                <p>Je devrai réexaminer son <strong>balisage Schema</strong>. En effet, si l'outil
                    de vérification schema.org l'identifie correctement, ce n'est pas le cas de 
                    l'outil Google "Test de résultats enrichis". Cela peut signifier que le balisage choisi
                    ne correspond pas à un "résultat enrichi" ou bien qu'il y a une erreur.</p>
                ` },
                {
                    title: 'Fonctionnalités', content: `<h3>Boucle, Cartes et Modales</h3>
                    <h4>Boucles</h4>
                    
                    <p>Il y a 2 <strong>boucles</strong>, affichant un tableau d'objets: une sur la page d'accueil et une sur la page portfolio. 
                        Elles sont extrêment concises avec vue:
                    <code>
                        &lt;Card v-for=&quot;cardData in $store.state.data.data&quot; :key=&quot;cardData._id&quot; :card=&quot;cardData&quot; /&gt;
 
                    </code>
                    Cela signifie "insérer un élément Card pour chaque objet stocké dans le tableau data l'état du store avec ces props.
                    </p> 
                    
                    <h4>Modales</h4>
                    <p>Il y a plusieurs modales:</p>
                        <ul>
                            <li>Les boutons <strong>"contact"</strong> dans le menu et dans la Home déclenchent l'apparition d'une
                                modale contenant le formulaire de contact. Lorsqu'il est correctement rempli, il est remplacé par un
                                message de validation et un bouton pour fermer la modale. Elle peut se fermer en cliquant dans la zone
                                 grisée, à l'extérieur d'elle. C'est le composant FormCTA.
                            </li>
                            <li>Les <strong>"cards"</strong> représentant les projets du portfolio en page d'accueil permettent l'ouverture d'une modale
                                où le projet est plus précisément décrit, avec un lien permettant de voir la page dédiée.</li>
                        </ul>
                <p>Elles sont gérées avec des "state".</p>
                <p>Le style des modales est très simple: on affiche une division avec la classe "modal", avec une position:fixed
                et qui prend tout l'écran. Elle a comme background-color un noir transparent. Ensuite, à l'intérieur, la
                division de classe "modal-content" va accueillir le contenu.</p> 
                
            ` },
                {
                    title: 'Difficultés rencontrées', content: `<h2>Difficultés rencontrées</h2>
            <h3>Sur le fonctionnement</h3>
            <p>Le formulaire a posé quelques difficultés.</p>
            <p>La première fois que j'ai testé, j'ai obtenu une erreur: <strong>webpack</strong> ne trouvait pas des dépendances de
                Node utilisées par Nodemailer, comme fs (=file system). En fait, il s'agissait de dépendances <strong>côté serveur</strong>,
                qu'il cherchait dans le bundle client. C'est qu'en fait il avait inclus dans ce dernier le fichier de
                gestion du formulaire, alors qu'il ne devait s'exécuter que côté serveur. Le problème était mon choix de nom: j'avais
                mis  mon script dans un dossier "middleware", alors qu'il fallait le mettre dans un dossier "serverMiddleware".
                C'est un détail lié au paramétrage de Nuxt.</p>
            <p> Néanmoins, cela n'était au final pas compatible avec l'<strong>export statique</strong>, voie que j'avais choisie. J'ai donc
                    préféré externaliser le traitement du formulaire, comme je l'ai dit plus haut, à un 
                serveur dédié.</p>
            <p>Second bug, lorsque j'envoyais le formulaire, j'obtenais "Cannot destructure property 'firstName' of
                'req.body' as it is undefined.". En plaçant "console.log(req.body)" au début de mon script de traitement du formulaire, 
                j'obtenais "undefined". Visiblement il fallait un parser pour analyser correctement le corps de la requête. 
                J'ai implémenté <strong>bodyparser</strong> et cela résolut le problème.</p>
           
            <h3>Sur la mise en page</h3>
            <p>J'avais tenté d'animer le bouton CTA de la page d'accueil comme mes autres boutons, avec un petit <strong>effet</strong> quand
                on passe la souris dessus. Néanmoins, cela s'est très mal combiné avec la modale qu'il déclenchait.
                En effet, l'affichage de cette dernière a lourdement dysfonctionné: elle alternait très rapidement entre son affichage
                "normal" et un affichage altéré lorsqu'on passait la souris dessus.</p>
            <p>J'ai été confronté à quelques autres difficultés, plus mineures, liées à ma découverte de Nuxt:</p>
            <ul>
                <li>Pour implémenter le scss dans les balises "style" des composants, il faut spécifier "lang="scss"" à
                    l'intérieur.</li>
                <li>La page <i>"/portfolio"</i> devait se trouver sous le nom <i>"index.vue"</i> dans le sous-dossier
                    <i>"portfolio"</i> pour ne pas
                    empêcher l'accès aux pages filles, et non pas sous le nom <i>"porfolio.vue"</i>
                    dans le dossier <i>"Pages"</i>.
                </li>
                <p>Je raconte un court audit de mon site dans <a href="https://www.uniteinnovation.com/exemple-de-rapide-audit-de-site-pro-alexandrebaumann-com/" target="_blank">
                    un article de blog</a> . J'y parle notamment de difficultés pour définir les bonnes adresses canonical.</p>
            </ul>` },
                {
                    title: 'Perspectives', content: `<h2>Pistes d'amélioration</h2>
                <p>Il manque au site des pages détaillant mes <strong>prestations</strong>. En effet, il serait intéressant que je développe
                    ce que je sais faire en SEO et développement web et, surtout, ce que cela peut apporter au client. En développement web, je peux
                    notamment mettre en avant ma sensibilité à l'UX et le fait que je fasse des sites conformes aux bonnes pratiques du SEO. Pour le SEO,
                    je peux mettre en avant l'intérêt stratégique et en termes de branding qu'il peut avoir. En outre, je peux renvoyer aux articles de fond
                    que j'écris que le sujet.
                </p>
                <p>Il faudra également que je finisse la présentation des travaux de mon <strong>portfolio</strong>. Je dois encore améliorer la mise en forme de mes études de marché SEO
                    et finaliser mon projet Alternative-hydrogène, puis le détailler et mettre en forme.</p>
                <p>Une fois que cela sera fait, je rendrai mon site <strong>multilingue</strong>.</p>
                <p>Il faudra également réétudier <strong>l'accessibilité</strong>, que j'installe le <strong>tracking</strong> et étudie les <strong>cookies</strong>. </p>
                    ` },

            ]
        };
    }
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

::v-deep .col2.equilibre {
    code {
        flex: 1;
    }

    >div {
        flex: 1;
    }
}</style>
  