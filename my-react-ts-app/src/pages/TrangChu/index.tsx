const TrangChu = () => {
    return (
        <div>
            <h2>Bài thực hành 02:</h2>
            <div>
                <b>Bài 1: Ứng dụng thời tiết</b>
                <br />- Sinh viên sử dụng axios để lấy dữ liệu qua địa chỉ
                https://wttr.in/<b>tenThanhPho</b>?format=j1, trong đó{" "}
                <b>tenThanhPho</b> là tên thành phố do người dùng nhập vào
                <br /> - Hiển thị kết quả là thông tin thời tiết của thành phố (Nhiệt
                độ, tình trạng thời tiết)
            </div>
            <div>
                <b>Bài 2: Ứng dụng danh sách sinh viên</b>
                <br />- Sinh viên sử dụng axios để lấy dữ liệu danh sách sinh viên qua
                địa chỉ https://jsonplaceholder.typicode.com/users
                <br />- Hiển thị danh sách sinh viên gồm các thông tin (Họ tên, email)
                <br />- Khi click vào 1 sinh viên thì hiển thị chi tiết (dùng React
                Router).
            </div>
            <div>
                <b>Bài 3: Ứng dụng xem tin tức</b>
                <br />- Sinh viên sử dụng axios để lấy dữ liệu tin tức qua địa chỉ
                https://api.spaceflightnewsapi.net/v4/articles?limit=10
                <br /> - Hiển thị danh sách tin tức gồm các thông tin (Ảnh, tiêu đề, mô
                tả, link tin gốc, ngày đăng)
            </div>
        </div>
    );
};

export default TrangChu;
