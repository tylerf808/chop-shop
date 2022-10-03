import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

function PDFDownload({ items, custInfo, total }) {

    const styles = StyleSheet.create({
        page: {
            backgroundColor: 'white'
        },
        section: {
            display: 'flex',
            flexDirection: 'row',
            margin: 5,
            padding: 5,
            flexWrap: 'wrap',
        },
        tableRow: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end'
        },
        tableCell: {
            flex: 3,
            fontSize: 12,
            color: '#44484B',
        },
        text: {
            fontSize: 12,
            color: '#44484B',
        },
        header: {
            fontSize: 30,
            marginTop: 5,
            marginLeft: 5,
        },
        tableHeader: {
            border: 'solid',
            borderWidth: 1,
            borderRadius: 3,
            borderColor: 'grey',
            display: 'flex',
            flexDirection: 'row',
        }
    });

    return (
        <Document>
            <Page size='A4' style={styles.page}>
                <Text style={styles.header}>The Chop Shop</Text>
                <Text style={{ fontSize: 17, marginLeft: 5 }}>6625 Taneytown Pike, Taneytown, MD 21787</Text>
                <Text style={{ fontSize: 17, marginLeft: 5, marginBottom: 10 }}>443-415-4643</Text>
                <View style={styles.section}>
                    {custInfo.map((item) => (
                        <View style={styles.tableRow}>
                            <Text style={[styles.text, { margin: 5 }]}>{item.name}:</Text><Text style={[styles.text, { margin: 5 }]}>{item.value}</Text>
                        </View>
                    ))}
                </View>
                <View style={styles.tableHeader}>
                    <Text style={{ flexGrow: 3, marginLeft: 5, fontSize: 16, color: '#44484B' }}>Item</Text><Text style={{ flexGrow: 1, fontSize: 16, color: '#44484B' }}>Quantity</Text><Text style={{ flexGrow: 1, fontSize: 16, color: '#44484B' }}>Price</Text><Text style={{ flexGrow: 1, fontSize: 16, color: '#44484B' }}>Subtotal</Text>
                </View>
                <View style={{border: 'solid', borderWidth: 1}}>
                    {items.map((item) => (
                        <View style={styles.tableRow} key={item.key}><Text style={{
                            flex: 6,
                            fontSize: 12,
                            color: '#44484B',
                            marginLeft: 6
                        }}>{item.name}</Text><Text style={styles.tableCell}>{item.value}</Text><Text style={styles.tableCell}>{item.itemPrice}</Text><Text style={styles.tableCell}>{item.price}</Text></View>
                    ))}
                </View>
                <Text style={{ left: 460, marginTop: 20, fontSize: 17 }}>Total: ${total}</Text>
            </Page>
        </Document>
    )
}

export default PDFDownload