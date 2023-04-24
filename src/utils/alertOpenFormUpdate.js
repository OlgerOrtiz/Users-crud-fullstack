import swal from "sweetalert2"
import './alerts.css'

const alertOpenFormUpdate = (handleOpenForm) => {

    swal.fire({
        imageUrl: '../image/warningOrange.png',
        title: 'Update User',
        text: "Do you want to update this user's information?",
        showCancelButton: true,
        confirmButtonText: ' Yes ',
        customClass: {
            image: 'Alert__ImageIcon',
            cancelButton: 'Alert__Btn--Cancel',
            confirmButton: 'Alert__Btn--Confirm'
        }
    }).then(res => {
        if (res.isConfirmed) {
            handleOpenForm()
        }
    })
}

export default alertOpenFormUpdate
