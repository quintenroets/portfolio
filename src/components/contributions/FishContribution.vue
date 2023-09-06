<template>
  <div>
    <ContributionCard name="Fish Shell" :url="url" logo="Fish.webp">
      <div>
        <PullRequest :project-url="url" :number="9565">
          <ContributionLine>
            Introduced configurable external cursor shape, enabling users to
            specify cursor shape during script executions
          </ContributionLine>
        </PullRequest>
      </div>
    </ContributionCard>
  </div>
</template>

<script>
import ContributionCard from "./ContributionCard.vue";
import ContributionLine from "./ContributionLine.vue";
import PullRequest from "./PullRequest.vue";

export default {
  data() {
    return {
      url: "https://github.com/fish-shell/fish-shell/",
    };
  },
  components: { ContributionLine, PullRequest, ContributionCard },
};
</script>
