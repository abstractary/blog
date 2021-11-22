import { c as create_ssr_component, v as validate_component } from "./app-2f09f60b.js";
import Layout from "./layout-cacdbe7f.js";
import "./CornerTitle-1139e2b5.js";
import "./BackTo-23f10359.js";
import "gsap";
import "gsap/dist/SplitText.js";
import "./global-472f6872.js";
import "bowser";
import "./store-30431d00.js";
import "./utils-09998264.js";
import "./IntersectionObserver-89b2e997.js";
const metadata = {
  "title": "National Champion, IX Speaking",
  "place": "International Extemporaneous Speaking",
  "award": "National Champion",
  "organization": "National Speech and Debate Association",
  "date": "2017-07-15",
  "featured": false,
  "media_url": "https://www.news-leader.com/story/news/business/2017/06/28/kickapoo-high-school-senior-earns-accolades-national-speech-and-debate-tournament/435570001/",
  "project_url": "https://www.youtube.com/watch?v=lzoUu1fDmWE"
};
const Nationals_2017 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => `<p>Awarded National Champion in International Extemporaneous Speaking. Sponsored by the Council on Foreign Relations and EF Hutton. Competed against hundreds of high schoolers throughout 13 rounds.</p>
<p>(Yes, this was when I peaked, way back in high school.)</p>`
  })}`;
});
export { Nationals_2017 as default, metadata };
