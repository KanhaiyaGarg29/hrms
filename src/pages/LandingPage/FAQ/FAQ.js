import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./faq.css";
import fimage from "../../../assets/download47.jpg"

export default function FAQ() {
  return (
    <div className="fourth-container" id="faq" data-aos="fade-up"
    data-aos-anchor-placement="top-center" data-aos-duration="1000">
    <div className="faq-container">
      <div>
        <h3>Combine all your HR Systems into one platform</h3>
        <p className="faq-content">WorkWave allows you to track leaves,task completed and other benefits from a single platform.No more data double entry and manual approval process---just easy accurate for you and your employees</p>
      </div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            What are the benefits of using an WorkWave?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The HR management system streamlines HR processes, reduces
            administrative workload, improves data accuracy, enhances employee
            engagement, and provides valuable insights through data analytics.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>How is employee data secured in WorkWave?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Employee data is secured using advanced encryption methods and multi-factor authentication. Regular security audits are conducted to ensure data integrity and compliance with data protection regulations.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography>How can employees access the HR management system?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Employees can access the HR management system via a secure web portal or a mobile application. They will need their unique login credentials provided by the HR department to gain access.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography>What features does WorkWave include?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The HR management system includes features such as employee database management,leave management,task management and role base access.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
    <div className="faq-image-container">
       {/* <img src={fimage} alt=""></img> */}
    </div>
    </div>
  );
}
