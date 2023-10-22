import { mount, shallowMount } from "@vue/test-utils";
import { definePageMeta } from '../.nuxt/imports.d.ts'
import Article from "../components/article/index.vue";
import Pages from "../pages/index.vue";

describe("test", () => {
  it("username test", () => {
    const msg = '<ul class="grid grid-cols-1 gap-8"></ul>'
    const wrapper = mount(Article, {
      props: {
        data: "World",
      },
    });

    expect(wrapper.html()).toMatch(msg)
  });
});