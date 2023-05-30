import { Story } from "@storybook/vue3";
import Navigation from "./index.vue";

export default {
  title: "components/Navigation",
  component: Navigation,
}

const Template: Story<typeof Navigation> = () => ({
  components: { Navigation },
  template: "<Navigation />",
});

export const Default = Template.bind({});
Default.storyName = "Increment Navigation Button";