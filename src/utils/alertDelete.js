import swal from "sweetalert2"
import './alerts.css'

const alertDelete =(deleteUserById, user) => {

    swal.fire({
        imageUrl: '../image/warningRed.png',
        title: 'Delete User',
        text: "Do you want to delete this user's information?",
        showCancelButton: true,
        confirmButtonText: ' Yes ',
        customClass:{
            image: 'Alert__ImageIcon',
            cancelButton: 'Alert__Btn--Cancel',
            confirmButton: 'Alert__Btn--Confirm'
        }
        
    }).then(res => {
        if (res.isConfirmed) {
            deleteUserById(user.id)
            swal.fire({
                icon: 'success',
                title: 'User delete successfully',
                timer: '1200',
                showConfirmButton: false,
                customClass: {
                    title: 'Alert__Success--Title',
                }
            })
        }
    })
}


export default alertDelete