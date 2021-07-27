import Firebase, { db } from '../../services/firebase/FirebaseConfig'

//Firestore Refs
const adminRef = db.collection('user').doc('admin')
const usersRef = db.collection('user')

export const login = (dispatch, email, password, setError, setLoading, navigation) => {
    setError('')
    Firebase.auth().signInWithEmailAndPassword(email, password)
        .then((response) => {
            const uid = response.user.uid
            usersRef.doc(uid).get()
                .then(firestoreDocument => {
                    if (!firestoreDocument.exists) {
                        setError("User does not exist.")
                        setLoading(false)
                        return;
                    }
                    const user = firestoreDocument.data()

                    /*console.log(user)
                     === { 
                         "email": "admin@admin.com",
                         "fullName": "admin",
                         "id": "jWB4mPqXQDVdSZRzNeRUriGa8A92" 
                        }
                    */
                    dispatch({
                        type: 'GET_CURRENT_USER',
                        payload: user
                    })
                    window.location = '/dashboard'

                    // // if (user.fullName === 'admin') {
                    // //     navigation.reset({
                    // //         index: 1,
                    // //         routes: [{ name: 'Home' }, { name: 'Admin' }],
                    // //     })

                    // // }
                    // else {
                    // navigation.reset({
                    //     index: 1,
                    //     routes: [{ name: 'Home' }, { name: 'Ordering' }],
                    // })
                    // }
                })
                .catch(error => {
                    setError('Login Failed. Please try again.')
                    setLoading(false)
                    console.log(error)
                });
        })
        .catch(error => {
            //  setError('Login Failed. Please turn ON your internet connection.')
            setError(error.message)
            setLoading(false)
            console.log(error)
        })
}

export const singUp = (dispatch, fullName, email, password, section, setError, setLoading) => {
    setError('')
    Firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((response) => {
            const uid = response.user.uid
            const data = {
                id: uid,
                email,
                fullName,
                section,

            };
            usersRef.doc(uid).set(data)
                .then(() => {
                    dispatch({
                        type: 'GET_CURRENT_USER',
                        payload: data
                    })
                    window.location = '/allclassSection'
                })
                .catch((error) => {
                    setError('Registering Failed. Please try again.')
                    setLoading(false)
                    console.log(error)
                });
        })
        .catch((error) => {
            // setError('Login Failed. Please turn ON your internet connection.')
            setLoading(false)
            setError(error.message)
            console.log(error)
        });
}






export function viewPageAction(page) {
    return ({
        type: 'VIEWPAGE',
        payload: page
    })
}

