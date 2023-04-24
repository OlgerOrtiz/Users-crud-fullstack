import swal from "sweetalert2"
import './alerts.css'

const alertConfirmUpdate = (updateUserById, updateInfo, data) => {

    swal.fire({
        imageUrl: '../image/question.png',
        title: 'Confirm Update',
        text: "Do you want to confirm the changes?",
        showCancelButton: true,
        confirmButtonText: 'Confirm',
        customClass: {
            image: 'Alert__ImageIcon',
            cancelButton: 'Alert__Btn--Cancel',
            confirmButton: 'Alert__Btn--Confirm'
        }
    }).then(res => {
        if (res.isConfirmed) {
            updateUserById(updateInfo.id, data)
            swal.fire({
                icon: 'success',
                title: 'User Update successfully',
                timer: '1200',
                showConfirmButton: false,
                customClass: {
                    title: 'Alert__Success--Title',
                }
            
            })
        }
    })
}

export default alertConfirmUpdate