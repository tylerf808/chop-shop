import { Document, Page, Text, View, } from '@react-pdf/renderer';

function PDFDownload({ tbd, items, custInfo, total }) {

    const formattedTotal  =  total.toFixed(2)

    return (
        <Document>
            <Page size='A4' style={{}}>
                <Text style={{ fontSize: 32, marginTop: 15, marginLeft: 15, marginBottom: 6 }}>The Chop Shop</Text>
                <Text style={{ fontSize: 15, marginLeft: 15 }}>6625 Taneytown Pike, Taneytown, MD 21787</Text>
                <Text style={{ fontSize: 15, marginBottom: 15, marginLeft: 15 }}>443-415-4643</Text>
                <View style={{ display: 'inline-block', left: 10, flexDirection: 'column', margin: 20, marginRight: 50 }}>
                    {custInfo.map((item) => (
                        <View style={{display:  'flex', flexDirection:  'row'}}><Text style={{ margin: 1, fontSize: 11, fontWeight: 'bold' }}>{item.name}: </Text><Text style={{ margin: 2, fontSize: 11, fontStyle: 'italic' }}>{item.value}</Text></View>
                    ))}
                </View>
                <View style={{ backgroundColor: '#B9BDBA', border: 'solid', borderWidth: 1, display: 'flex', flexDirection: 'row', marginLeft: 12, marginRight: 12 }}>
                    <Text style={{ flex: 4, marginLeft: 5, fontSize: 16}}>Item</Text><Text style={{ flex: 2, fontSize: 16}}>Quantity</Text><Text style={{ flex: 2, fontSize: 16}}>Price</Text><Text style={{ flex: 2, fontSize: 16}}>Subtotal</Text>
                </View>
                <View style={{ border: 'solid', borderWidth: 1, marginLeft: 12, marginRight: 12 }}>
                    {items.map((item) => (
                        <View style={{ display: 'flex', flexDirection: 'row', margin:  3 }}>
                            <Text style={{ fontSize: 9, flex: 4 }}>{item.name}</Text><Text style={{ fontSize: 9, flex:  2 }}>{item.value}</Text><Text style={{ fontSize: 9, flex: 2 }}>${item.itemPrice}</Text><Text  style={{ fontSize: 9, flex: 2 }}>${item.price}</Text>
                        </View>
                    ))}
                    {tbd.map((item) => (
                        <View style={{ display: 'flex', flexDirection: 'row', margin:  3 }}>
                            <Text style={{ fontSize: 9, flex: 4 }}>{item.name}</Text><Text style={{ fontSize: 9, flex:  2 }}>{item.value}</Text><Text style={{ fontSize: 9, flex: 2 }}>${item.itemPrice}</Text><Text  style={{ fontSize: 9, flex: 2 }}>N/A</Text>
                        </View>
                    ))}
                </View>
                <Text style={{ left: 460, marginTop: 20, fontSize: 17 }}>Total: ${formattedTotal}</Text>
            </Page>
        </Document>
    )
}

export default PDFDownload