import { mount, shallowMount } from "@vue/test-utils";
import Pages from "../pages/index.vue";

describe("test", () => {
  it("username test", () => {
    const msg = '<ul class="grid grid-cols-1 gap-8"></ul>'
    const wrapper = mount(Pages);

    expect(wrapper.html()).toMatch(msg);
  });
});