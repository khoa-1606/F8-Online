//Lấy phần tử form từ dữ liệu
const form = document.querySelector('form') 
    //Lấy phần từ đầu vào là tên người dùng từ document
    const usernanme = document.getElementById('username')
    //Lấy phần từ đầu vào là email từ document
    const email = document.getElementById('email')
    //Lấy phần từ đầu vào là mật khẩu từ document
    const password = document.getElementById('password')
    //Lấy phần từ đầu vào xác nhận mật khẩu từ document
    const password2 = document.getElementById('password2')


//Định nghĩa 1 hàm tên là showError
//Hàm nhận 2 đối số là đầu vào (input) và thông báo lỗi (message)
    function showError(input, message) {
        const formControl = input.parentElement
        //Đặt tên lớp của điều khiển biểu mẫu thành 'lỗi điều khiển biểu mẫu'
        //Điều này sẽ thêm lớp lỗi vào điều khiển biểu mẫu, điều này sẽ thay đổi giao diện của nó để cho biết rằng có lỗi.
        formControl.className = 'form-control error'
        // Lấy phần tử nhỏ bên trong điều khiển biểu mẫu. Phần tử nhỏ sd để hiển thị lỗi
        const small = formControl.querySelector('small')
        //Đặt văn bản bên trong của phần tử nhỏ thành thông báo lỗi
        small.innerText = message
    }

//Định nghĩa 1 hàm tên là showSuccess
//Hàm nhận đối số là input
    function showSuccess(input) {
        //lấy phần tử cha của phần tử đầu vào. Phần tử cha là phần tử div chứa phần tử đầu vào
        const formControl = input.parentElement
        //đặt tên lớp của điều khiển biểu mẫu thành 'thành công điều khiển biểu mẫu'
        //Điều này sẽ thêm lớp thành công vào điều khiển biểu mẫu, lớp này sẽ thay đổi giao diện của nó để cho biết rằng không có lỗi
        formControl.className = 'form-control success'
        //lấy phần tử nhỏ bên trong điều khiển biểu mẫu. Phần tử nhỏ được sử dụng để hiển thị thông báo thành công
        const small = formControl.querySelector('small')
        //đặt văn bản bên trong của phần tử nhỏ thành thông báo thành công
        small.innerText = message
    }

//định nghĩa một hàm có tên là checkEmail(). Hàm nhận một đối số: một phần tử đầu vào
    function checkEmail(input) {
        // xác định một biểu thức chính quy được sử dụng để khớp với một địa chỉ email hợp lệ
        const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        // kiểm tra xem giá trị của phần tử đầu vào có khớp với biểu thức chính quy hay không
        //Nếu có, hàm sẽ trả về true
        if (re.test(input.value.trim())) {
            //gọi một hàm có tên là showSuccess()
            //Chức năng showSuccess()được sử dụng để hiển thị một thông báo thành công
            showSuccess(input)
        } 
        // thực thi nếu giá trị của phần tử đầu vào không khớp với biểu thức chính quy
        else {
            //Sau đó, hàm sẽ gọi một hàm có tên là showError()
            //Chức năng showError()được sử dụng để hiển thị thông báo lỗi
            showError(input, 'Invalid Email')
        }
    }

//định nghĩa một hàm có tên là checkRequired()
//Hàm nhận một đối số: một mảng các phần tử đầu vào(inputArr)
    function checkRequired(inputArr) {
        // khai báo một biến được gọi isRequiredvà khởi tạo nó thành false
        //Biến isRequiredsẽ được sử dụng để theo dõi xem có bất kỳ trường đầu vào nào trống hay không
        let isRequired = false
        //sử dụng forEach()phương thức để lặp qua mảng inputArr
        //forEach()thức lấy một hàm làm đối số của nó
        inputArr.forEach(function (input) {
            //kiểm tra xem giá trị của phần tử đầu vào có trống không
            //Nếu đúng như vậy, hàm sẽ tiếp tục đến lần lặp tiếp theo của vòng forEach() lặp
            if (input.value.trim() === '') {
                //gọi hàm showError(). Chức năng showError()được sử dụng để hiển thị thông báo lỗi
                showError(input, 'Cannot empty')
                //đặt giá trị của isRequiredbiến thành true. Điều này chỉ ra rằng ít nhất một trong các trường đầu vào trống
                isRequired - true
            } 
            //Dòng mã này được thực thi nếu giá trị của phần tử đầu vào không trống
            //Hàm sau đó sẽ gọi hàm showSuccess()
            //Chức năng showSuccess()được sử dụng để hiển thị một thông báo thành công
            else {
                showSuccess(input)
            }
        })
        //trả về giá trị của isRequiredbiến. Giá trị này sẽ được sử dụng để xác định xem hàm sẽ trả về đúng hay sai
        return isRequired
    }
    
    function checkLength(inputvalue, min, max) {
        if (inputvalue.length < min) {
          showError(input, $(getFieldName(input)), `phải có ít nhất ${min} ký tự`);
        } else if (inputvalue.length > max) {
          showError(input, $(getFieldName(input)), `phải có ít nhất ${max} ký tự`);
        } else {
          showsuccess(input);
        }
    }

    function checkPasswordsMatch(input1, input2) {
        if (input1.value !== input2.value) {
            showError(input2, 'Mật khẩu không đúng!')
        }
    }

    function getFieldName(input) {
        return input.id.charAt(0).toUpperCase() | input.id.slide(1)
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault()

        if(!checkRequired([username, email, password, password2])) {
            checkLength(username, 3, 15)
            checkLength(password, 6, 25)
            checkEmail(email)
            checkPasswordsMatch(password, password2)
        }
    })