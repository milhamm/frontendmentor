import ky from "ky";

const http = ky.create({ prefixUrl: "https://api.adviceslip.com" });

export { http };
