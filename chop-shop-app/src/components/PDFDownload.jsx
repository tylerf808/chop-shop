import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
    }
  });

function PDFDownload({ items, custInfo}) {

    return (
        <Document>
            <Page style={styles.page}>
                <View style={styles.section}>
                    {custInfo.map((item) => (
                        <Text key={item.key}>{item.name}: {item.value}</Text>
                    ))}
                </View>
                <View style={styles.section}>
                    {items.map((item) => (
                        <Text key={item.key}>{item.name} --------------- {item.price}</Text>
                    ))}
                </View>
            </Page>
        </Document>
    )
}

export default PDFDownload