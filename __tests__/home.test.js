import { shallowMount } from "@vue/test-utils";
import Form from "../components/article/index.vue";

describe("test", () => {
  it("username test", () => {
    const wrapper = shallowMount(Form);

    const usernameElement = wrapper.get(".username");
    expect(usernameElement.element.value).toBe("");
  });

  it("password test", () => {
    const wrapper = shallowMount(Form);

    const passwordElement = wrapper.get(".password");
    expect(passwordElement.element.value).toBe("");
  });
});