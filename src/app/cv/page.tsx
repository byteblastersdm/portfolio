"use client";
import React from "react";
import { useState } from "react";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const CVTemplate = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.contact}>{data.contact}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Summary</Text>
        <Text style={styles.content}>{data.summary}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        {data.experience.map((job, index) => (
          <View key={index}>
            <Text style={styles.jobTitle}>{job.position} - {job.company}</Text>
            <Text style={styles.jobDetails}>{job.description}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        {data.education.map((edu, index) => (
          <View key={index}>
            <Text style={styles.eduTitle}>{edu.degree} - {edu.institution}</Text>
            <Text style={styles.eduDetails}>{edu.year}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  page: { padding: 30, fontSize: 12 },
  header: { marginBottom: 20, textAlign: "center" },
  name: { fontSize: 24, fontWeight: "bold" },
  title: { fontSize: 18, color: "gray" },
  contact: { fontSize: 12, color: "blue" },
  section: { marginBottom: 15 },
  sectionTitle: { fontSize: 16, fontWeight: "bold", marginBottom: 5 },
  content: { marginBottom: 10 },
  jobTitle: { fontWeight: "bold" },
  jobDetails: { fontStyle: "italic" },
  eduTitle: { fontWeight: "bold" },
  eduDetails: { fontStyle: "italic" },
});

export default function CVEditor() {
  const [cvData, setCvData] = useState({
    name: "Satish Kumar Gupta",
    title: "Web Developer | MERN Stack | React | Node.js",
    contact: "9122785915 | satishjmdav@gmail.com | Ramgarh, Jharkhand",
    summary:
      "I am a skilled web developer with a solid foundation in JavaScript technologies...",
    experience: [
      {
        position: "Software Engineer",
        company: "Jai Infoway Pvt Ltd",
        description:
          "Handling the complete technical part of the project. Frontend build on ReactJs...",
      },
      {
        position: "ITES Executive",
        company: "iMerit Technology Services Pvt. Ltd.",
        description: "A company providing IT solutions and data services.",
      },
    ],
    education: [
      {
        degree: "MCA",
        institution: "Sarala Birla University",
        year: "2022 - 2024",
      },
      {
        degree: "Higher Secondary Education - 12th",
        institution: "Kishan Mazdoor Inter College",
        year: "2016 - 2018",
      },
    ],
  });

  return (
    <div className="p-4">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">CV Editor</h1>
      </div>
      <PDFDownloadLink
        document={<CVTemplate data={cvData} />}
        fileName="Satish_Kumar_Gupta_CV.pdf"
      >
        {
          <React.Fragment>
           <button className="bg-blue-500 text-white px-4 py-2 rounded">Download CV as PDF</button>
          </React.Fragment>
        }
      </PDFDownloadLink>
    </div>
  );
}
