<template>
  <div>
    <h1 class="mb-4">Honors & Awards</h1>
    <div class="flex justify-center mb-4">
      <div class="w-[40rem] h-64 relative">
        <NavigationButtonsComponent
          v-bind:current-index="currentIndex"
          v-bind:total="numberOfAwards"
          @next="onNext"
          @previous="onPrevious"
        />
        <AwardCard
          v-if="currentIndex === 0"
          title="BAEF Graduate Study Fellowship"
          issuer="Belgian American Educational Foundation"
          date="Mar 2022"
          image="https://baef.be/wp-content/uploads/2022/06/BAEF-Be-Fellows-2022.jpg"
          url="https://baef.be/2022/06/28/baef-fellows-2022-2023/"
        >
          BAEF provides financial support for studying at a top institution in
          the United States. The Fellows are selected competitively from a pool
          of brilliant applicants by a Fellowship Committee that interviews all
          candidates personally.
        </AwardCard>
        <AwardCard
          v-if="currentIndex === 1"
          title="2nd place in NLP competition"
          issuer="Kaggle"
          date="Feb 2022"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/934px-Logo_of_Twitter.svg.png"
          url="https://www.kaggle.com/competitions/ugent-nlp-2022-competition/overview"
        >
          Leveraged embeddings from large foundation models for predicting
          sentiment in Covid-related tweets
        </AwardCard>
        <AwardCard
          v-if="currentIndex === 2"
          title="Shodan degree"
          issuer="Vlaamse Judofederatie"
          date="Mar 2018"
          image="https://peepl-prd-media.s3.eu-central-1.amazonaws.com/139/frontpage_logo/ab9bee8b-f5f3-4ec7-816e-94f7acd3f1aa.png"
          url="https://judobrugge.peepl.be/nl/site/"
        >
          Black belt in judo
        </AwardCard>
        <AwardCard
          v-if="currentIndex === 3"
          smaller-title="Finalist and laureate of the Flanders Mathematics Olympiad"
          issuer="Vlaamse Wiskunde Olympiade"
          date="May 2017"
          image="https://www.vwo.be/vwo/wp-content/uploads/2020/09/VWO-transp_crop-e1599576453284.png"
          url="https://www.vwo.be/vwo/prijswinnaars-2017/"
        >
          A prestigious competition with more than 25 000 participants
        </AwardCard>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationButtonsComponent from "@/components/NavigationButtonsComponent.vue";
import AwardCard from "@/components/AwardCard.vue";
export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  computed: {
    numberOfAwards() {
      return 4;
    },
  },
  methods: {
    onNext() {
      this.currentIndex++;
    },
    onPrevious() {
      this.currentIndex--;
    },
  },
  components: {
    AwardCard,
    NavigationButtonsComponent,
  },
};
</script>
