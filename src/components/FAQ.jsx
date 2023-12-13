import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Partners from './Partners';

export default function FAQ() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <section id='FAQ'>
      <div className='FAQ' >
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
                Оплата за химчистку ковров производится после получения чистых ковров. Разворачивайте, смотрите, оплачивайте наличными, картами и переводами.
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
                Неприятный запах от мочи животных очень стойкий. Чтобы его устранить мы замачиваем ковёр в специальных растворах для растворения кристалликов мочевой кислоты (что невозможно сделать на дому). Тем самым, мы добиваемся полного удаления запаха в 99% случаев.
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
                Неприятный запах от мочи животных очень стойкий. Чтобы его устранить мы замачиваем ковёр в специальных растворах для растворения кристалликов мочевой кислоты (что невозможно сделать на дому). Тем самым, мы добиваемся полного удаления запаха в 99% случаев.
              </Typography>
            </AccordionDetails>
          </Accordion>

          
          
        </div>

        <div className="col-md-6">

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
                Если ковер не подлежит чистке и может быть испорчен, уведомляем клиента о возможных рисках и чистим под его ответственность. В случае сомнений проводим предварительный тест.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
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
                С учётом транспортной логистики и насыщенности цикла чистки, с момента передачи вашего ковра курьеру до его получения проходит 2-4 рабочих дней.
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
                Да, мы оказываем услугу по вывозу и доставке ковров. В это входит упаковка грязного ковра, спуск, вывоз, упаковка чистого ковра, доставка, подъем ковра до квартиры.
              </Typography>
            </AccordionDetails>
          </Accordion>

          

         
          
        </div>
        

          
        </div>

        
      </div>
    </div>
    <Partners/>
    </section>
  )
}
