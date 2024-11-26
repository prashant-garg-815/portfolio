import { Chip, Stack, Typography } from "@mui/material";
import { Experience as ExperienceType } from "../../data";

export const Experience = (data: ExperienceType) => {
  return (
    <Stack direction='row' gap='30px'>
      {/* Date */}
      <Typography color='#5b7289' fontSize={'14px'}>
        {`${data.startDate.month} ${data.startDate.year} — ${data.endDate?`${data.endDate.month} ${data.endDate.year}`:'PRESENT'}`}
      </Typography>
      {/* Right Column */}
      <Stack direction='column' gap={1.5}>
        {/* Title */}
        <Typography>{data.designation} . {data.organisation}</Typography>
        {/* Paras of details */}
        <Stack gap={0.5}>
          {data.details.map(detail => (
            <Typography color='#94a3b8' fontSize={'14px'} dangerouslySetInnerHTML={{__html: detail}} />
          ))}
        </Stack>
        {/* TechStack */}
        <Stack direction='row' gap={1}>
          {data.techStack.map(tech => (
            <Chip
              label={tech}
              variant='outlined'
              sx={{
                color: '#b0fc38',
                borderColor: '#b0fc38'
              }}
            />
          ))}
        </Stack>
      </Stack>
    </Stack>
  )
}