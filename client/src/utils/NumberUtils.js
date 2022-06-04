// 3자릿수 마다 콤마 추가
export function insertCommas(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
