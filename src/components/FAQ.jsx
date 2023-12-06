import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <section className='FAQ'>
      <div className="container">
        <div className="row">
        <h2>Часто задаваемые <br /> <span>вопросы</span></h2>
        <div className="col-md-6">
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color : "#2F003A"}} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className='acardion-tittle' sx={{ width: '100%', flexShrink: 0 }}>
                Как осуществляется оплата услуги по чистке ковров?
              </Typography>
              {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
            </AccordionSummary>
            <AccordionDetails>
              <Typography className='acardion-txt'>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color : "#2F003A"}} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className='acardion-tittle' sx={{ width: '100%', flexShrink: 0 }}>
                У нас собачка (котик) «сходила» на ковёр. Запах уйдет?
              </Typography>
              {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
            </AccordionSummary>
            <AccordionDetails>
              <Typography className='acardion-txt'>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color : "#2F003A"}} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className='acardion-tittle' sx={{ width: '100%', flexShrink: 0 }}>
                Что делать, если непредвиденные обстоятельства мешают мне получить заказ?
              </Typography>
              {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
            </AccordionSummary>
            <AccordionDetails>
              <Typography className='acardion-txt'>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color : "#2F003A"}} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className='acardion-tittle' sx={{ width: '100%', flexShrink: 0 }}>
              Даете ли вы гарантию на сохранность ковра после чистки?
              </Typography>
              {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
            </AccordionSummary>
            <AccordionDetails>
              <Typography className='acardion-txt'>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </AccordionDetails>
          </Accordion>
          
        </div>

        <div className="col-md-6">
          <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color : "#2F003A"}} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className='acardion-tittle' sx={{ width: '100%', flexShrink: 0 }}>
                Запах от химии останется? Будет ли ребенку безопасно?
              </Typography>
              {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
            </AccordionSummary>
            <AccordionDetails>
              <Typography className='acardion-txt'>
                Мы используем только безопасные ковровые шампуни, также наш цикл чистки включает обильное промывание ковра чистой водой до полного вымывания моющих средств. Поэтому не стоит беспокоиться о химическом запахе. Для ребёнка не будет никакого вреда.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color : "#2F003A"}} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className='acardion-tittle' sx={{ width: '100%', flexShrink: 0 }}>
                Вы забираете ковер на чистку из дома?
              </Typography>
              {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
            </AccordionSummary>
            <AccordionDetails>
              <Typography className='acardion-txt'>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color : "#2F003A"}} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className='acardion-tittle' sx={{ width: '100%', flexShrink: 0 }}>
              Как долго происходит чистка?
              </Typography>
              {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
            </AccordionSummary>
            <AccordionDetails>
              <Typography className='acardion-txt'>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </AccordionDetails>
          </Accordion>

         
          
        </div>
        

          
        </div>

        
      </div>
    </section>
  )
}
