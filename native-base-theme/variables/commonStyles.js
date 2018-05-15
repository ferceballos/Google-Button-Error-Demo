import { Dimensions } from 'react-native';

const screen = Dimensions.get('screen');

export default {

    //Colors
    white: {
        backgroundColor: 'white'
    },

    textGrey: {
        color: 'grey'
    },

    greyl5: {
        backgroundColor: '#fafafa'
    },

    //Margins
    mt1: {
        marginTop: '6%',
    },
    mt2: {
        marginTop: '18%',
    },
    mt4: {
        marginTop: '28%'
    },

    mb1: {
        marginBottom: '6%',
    },
    pt: {
        marginTop: 15,
        marginBottom: 8
    },

    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: 25,
        marginRight: 25,
        marginTop: 20,
    },

    //Paddings

    ph1: {
        paddingHorizontal: '4%',
    },

    pb1: {
        paddingBottom: '6%',
    },

    pr1: {
        paddingRight: '6%',
    },

    pb2: {
        paddingBottom: '12%',
    },

    pend: {
        paddingBottom: '2%',
    },

    //Border
    bordered: {
        borderRadius: 4,
        borderWidth: 4,
        borderColor: 'red',
    },

    borderTop: {
        borderTopWidth: 1, borderTopColor: '#e0e0e0'
    },

    //Typography
    info: {
        marginLeft: screen.width * 0.14,
        marginRight: screen.width * 0.14,
        color: '#424242',
        textAlign: 'center'
    },

    small: {
        fontSize: 14,
    },

    //Aligning
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    //Flex
    f1: {
        flex: 1
    },

    //Utils
    bordered: {
        borderRightWidth: 0.5,
        borderColor: '#d6d7da',
    },

    boxed: {
        borderTopWidth: 0.5,
        borderColor: '#d6d7da',
    },

    //Images Sizes
    bookShelfImage: {
        width: screen.width * 0.44, height: screen.height * 0.14
    },
    TakeOutImage: {
        width: screen.width * 0.28, height: screen.height * 0.168
    },
    image: {
        flex: 1,
        width: screen.width * 0.48,
        height: screen.height * 0.38,
        alignSelf: 'stretch',
    },
    notFoundimage: {
        flex: 1,
        width: screen.width * 0.34,
        height: screen.height * 0.34,
    },

    // CardBook Things
    cardContainer: {
        paddingLeft: 0, width: '96%', marginLeft: '2%', marginTop: 4
    },
    coverSection: {
        width: '20%',
        padding: 4
    },
    cardTitle: {
        fontSize: 18,
        color: '#424242',
    },
    cardAutor: {
        color: '#9e9e9e', paddingTop: 6
    },
    cardClasificacion: {
        color: '#9e9e9e', paddingBottom: 2
    },
    dataSection: {
        width: '80%', paddingVertical: 18, paddingHorizontal: 14
    },

    // Another Components
    resultsNumber: {
        textAlign: 'center', margin: 18, color: '#9e9e9e', fontSize: 18,
    },

    // Sections
    sectionTitle: {
        marginTop: 30,
        marginBottom: 10,
        color: '#424242'
    }

};

