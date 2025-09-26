import { StyleSheet } from 'react-native';

export const styles = () =>
  StyleSheet.create({
    loginContainer: {
      padding: 16,
      justifyContent: 'center',
      marginBottom: 15,
    },

    commonContainer: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    flex1: {
      flex: 1,
    },
    flexRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    marginBottom20: {
      marginBottom: 20,
    },

    appLogo: {
      width: 200,
      height: 53,
    },
    titleText: {
      fontSize: 24,
      textAlign: 'center',
      marginBottom: 20,
    },

    inputLable: {
      color: 'red',
      fontSize: 14,
      marginBottom: 4,
    },
    textInput: {
      borderWidth: 1,
      paddingHorizontal: 10,
      borderRadius: 5,
      height: 46,
      backgroundColor: 'red',
    },
    errorInput: {
      borderColor: 'red',
    },
    passWordInputContainer: {
      flexDirection: 'row',
      borderWidth: 1,
      paddingHorizontal: 10,

      borderRadius: 8,
      backgroundColor: 'red',
    },
    errorContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'red',
      padding: 15,
      borderRadius: 5,
      marginBottom: 15,
    },
    errorText: {
      flex: 1,

      fontSize: 12,
    },
    hyperLinkText: {
      fontSize: 14,
    },
    bottomTextContainer: {
      textAlign: 'center',
      marginTop: 30,
    },
    TandCText: {
      fontSize: 14,
      lineHeight: 18,
    },
    enableFaceIdText: {
      fontSize: 14,
    },
  });
