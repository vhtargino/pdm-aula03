import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { db } from '../config/firebaseConfig'
import { getDoc } from 'firebase/firestore'

const CursoFormScreen = ({ route, navigation }) => {

    const itemId = route.params?.itemId
    const [nome, setNome] = useState("")
    const [descricao, setDescricao] = useState("")
    const [editando, setEditando] = useState(false)

    useEffect(() => {
        if (itemId) {
            const buscarCurso = async () => {
                const docRef = doc(db, 'curso', itemId)
                const docSnap = await getDoc(docRef)
                if (docSnap.exists) {
                    setNome(docSnap.data().name)
                    setDescricao(docSnap.data().description)
                    setEditando(true)
                }
            }
            buscarCurso()
        }
    }, [itemId])
    
    return (
        <View>
            <Text>CursoFormScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#f5f5f5' },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
    input: { borderBottomWidth: 1, marginBottom: 20, padding: 8 },
})

export default CursoFormScreen