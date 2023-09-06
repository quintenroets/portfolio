<template>
  <div>
    <ContributionCard name="Pytorch Lightning" :url="url" logo="Lightning.webp">
      <div>
        <PullRequest :project-url="url" :number="18369">
          <ContributionLine>
            Discovered inefficiency in high-frequency metric rendering procedure
            in Pytorch Lightning's
            <a
              href="https://lightning.ai/docs/pytorch/stable/api/lightning.pytorch.callbacks.RichProgressBar.html"
            >
              Rich Progress Bar</a
            >
          </ContributionLine>
          <ContributionLine>
            Improved runtime efficiency by 10% by replacing in-loop string
            concatenations with generator expression
          </ContributionLine>
          <ContributionLine>
            Benchmarked and visualized performance gains using
            <a href="https://docs.python.org/3/library/timeit.html">timeit</a>
          </ContributionLine>
        </PullRequest>
        <PullRequest :project-url="url" :number="18372">
          <ContributionLine>
            Enabled user-defined delimiter for machine learning metrics
            displayed in PyTorch Lightning's
            <a
              href="https://lightning.ai/docs/pytorch/stable/api/lightning.pytorch.callbacks.RichProgressBar.html"
            >
              Rich Progress Bar</a
            >, enhancing flexibility and readability of metrics display
          </ContributionLine>
        </PullRequest>
        <PullRequest :project-url="url" :number="18373">
          <ContributionLine>
            Introduced configurable formatting type for metric values in PyTorch
            Lightning's
            <a
              href="https://lightning.ai/docs/pytorch/stable/api/lightning.pytorch.callbacks.RichProgressBar.html"
            >
              Rich Progress Bar</a
            >, enabling informative display of loss values in atypical ranges
          </ContributionLine>
        </PullRequest>
        <PullRequest :project-url="url" :number="18483">
          <ContributionLine>
            Improved stability of metrics rendering display by standardizing a
            formatting type with consistent decimal precision
          </ContributionLine>
          <ContributionLine>
            Implemented unit tests to verify the behavior and configuration of
            custom metric formatting
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
      url: "https://github.com/Lightning-AI/lightning/",
    };
  },
  components: { ContributionLine, PullRequest, ContributionCard },
};
</script>
