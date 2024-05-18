import unidecode from "unidecode";

export function changeString(str) {
    // Xóa dấu từ chuỗi sử dụng biểu thức chính quy
    const unaccented = unidecode(str);
    const split = unaccented.split(" ");
    const connect = split.join("-");
    return connect.trim();
}
