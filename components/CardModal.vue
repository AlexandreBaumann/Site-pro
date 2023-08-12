<template>
    <div v-if="show" class="modal" @click="closeModal($event)">
        <div class="modal-content">
            <span class="close-btn" @click="close()">&times;</span>
            <img :src="card.thumb" />
            <ul class="technologies">
                <li v-for="tech in  card.technologies " :key="tech" :class="tech">{{ tech }}</li>
            </ul>
            <h2>{{ card.titre }}</h2>
            <p v-html="card.resumeP1"></p>
            <div class="cardLastDiv">
                <p v-html="card.resumeP2"></p>
                <a :href="card.url"><button>Voir le projet<br />en détail</button></a>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        show: {
            type: Boolean,
            required: true
        },
        card: {
            type: Object,
            required: true
        }
    },
    methods: {
        close() {
            this.$emit('close');
        },
        closeModal(event) {
            if (event.target.classList.contains('modal')) {
                this.close();
            }
        }
    }
}
</script>
  
<style scoped lang="scss">
.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
}

.modal-content {
    background-color: white;
    position: relative;
    padding: 50px;
    border-radius: 20px;
    width: 70%;
    max-width: 50%;

    @media (max-width:$tall-to-mid) {
        padding: 30px;

    }

    img {
        height: 300px;
        width: 100%;
        object-fit: contain;

        @media (max-width:$tall-to-mid) {
            height: 200px;

        }

        @media (max-width:$mid-to-tablet) {}

        @media (max-width:$tablet-to-smalltablet) {}

        @media (max-width:$smalltablet-to-phone) {}

        @media (max-width:$phone-to-smallphone) {}

    }

    .close-btn {
        position: absolute;
        right: 20px;
        top: 10px;
        cursor: pointer;

        @media (max-width:$tall-to-mid) {}
    }

    h2 {
        text-align: center;
        font-size: 50px;

        @media (max-width:$tall-to-mid) {
            font-size: 30px;
        }

    }

    p {

        line-height: 160%;
        margin-top: 10px;
        margin-bottom: 10px;

        @media (max-width:$tall-to-mid) {
            font-size: 16px;
            margin-top: 5px;
            margin-bottom: 5px;
        }


    }

    .cardLastDiv {
        display: flex;
        align-items: center;

        p {
            width: 60%;
        }

        a {
            width: 40%;
            display: flex;
            justify-content: center;
            text-decoration: none;

            button {
                background-color: $yellow;
                color: $dark-blue;
                border-radius: 20px;
                padding: 20px 30px 20px 30px;
                font-weight: 600;
                line-height: 160%;

                @media (max-width:$tall-to-mid) {
                    padding: 10px 20px 10px 20px;
                }

                @media (max-width:$mid-to-tablet) {}

                @media (max-width:$tablet-to-smalltablet) {}

                @media (max-width:$smalltablet-to-phone) {}

                @media (max-width:$phone-to-smallphone) {}

            }


        }

    }

    .technologies {
        margin-top: 20px;
        margin-bottom: 0px;
        padding-left: 0px;
        row-gap: 5px;

        @media (max-width:$tall-to-mid) {
            margin-top: 5px;
            margin-bottom: 5px;
        }

        @media (max-width:$mid-to-tablet) {}

        @media (max-width:$tablet-to-smalltablet) {}

        @media (max-width:$smalltablet-to-phone) {}

        @media (max-width:$phone-to-smallphone) {}

        li {
            border-radius: 3px 0 0 3px;
            line-height: 34px;
            font-size: 22px;
            padding: 0 16px 0 30px;
            margin-right: 20px;
            border-radius: 20px;

            @media (max-width:$tall-to-mid) {
                line-height: 26px;
                font-size: 16px;
                padding: 0 10px 0 25px;

                @media (max-width:$mid-to-tablet) {}

                @media (max-width:$tablet-to-smalltablet) {}

                @media (max-width:$smalltablet-to-phone) {}

                @media (max-width:$phone-to-smallphone) {}

            }

            &::before {
                border-radius: 10px;
                box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
                height: 7px;
                width: 7px;
                top: 10px;
                left: 10px;

                @media (max-width:$tall-to-mid) {}

                @media (max-width:$mid-to-tablet) {}

                @media (max-width:$tablet-to-smalltablet) {}

                @media (max-width:$smalltablet-to-phone) {}

                @media (max-width:$phone-to-smallphone) {}

            }
        }
    }
}
</style>
  