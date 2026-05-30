import { config } from "dotenv";
config({ path: ".env.local" });

const model = process.argv[2] || "codeplugtech/face-swap";
const res = await fetch(`https://api.replicate.com/v1/models/${model}`, {
  headers: { Authorization: `Token ${process.env.REPLICATE_API_TOKEN}` },
});
const data = await res.json();
console.log(`Latest version: ${data.latest_version?.id}`);
console.log(`Input schema:`);
const props = data.latest_version?.openapi_schema?.components?.schemas?.Input?.properties;
if (props) {
  for (const [k, v] of Object.entries(props)) {
    console.log(`  ${k}: ${v.type || v.format || "?"} ${v.description ? "— " + v.description.slice(0, 80) : ""}`);
  }
}
