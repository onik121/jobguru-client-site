import React, { useEffect } from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const MyDocument = ({ bids }) => {

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <View style={styles.tableRow}>
                        <Text style={styles.columnHeader}>Job Title</Text>
                        <Text style={styles.columnHeader}>Deadline</Text>
                        <Text style={styles.columnHeader}>Salary</Text>
                        <Text style={styles.columnHeader}>Category</Text>
                        <Text style={styles.columnHeader}>Job Category</Text>
                    </View>
                    {bids.map(bid => (
                        <View style={styles.tableRow} key={bid._id}>
                            <Text style={styles.column}>{bid.job_title}</Text>
                            <Text style={styles.column}>{new Date(bid.deadline).toLocaleDateString()}</Text>
                            <Text style={styles.column}>${bid.max_salary} - ${bid.min_salary}</Text>
                            <Text style={styles.column}>{bid.category}</Text>
                            <Text style={styles.column}>{bid.job_category}</Text>
                        </View>
                    ))}
                </View>
            </Page>
        </Document>
    );
};

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        alignItems: 'center',
    },
    columnHeader: {
        flex: 1,
        fontSize: 10,
        padding: 5,
        textAlign: 'center',
    },
    column: {
        flex: 1,
        fontSize: 10,
        padding: 5,
        textAlign: 'center',
    },
});

export default MyDocument;
