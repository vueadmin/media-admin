import request from "@/utils/request";

export function createResources(data) {
  return request({
    url: "/resources/add",
    method: "post",
    data
  });
}

export function fetchResources() {
  return request({
    url: "/resources/index",
    method: "get"
  });
}

export function fetchResourcesQrcode(data) {
  return request({
    url: "/resources/qrcode",
    method: "post",
    data
  });
}
