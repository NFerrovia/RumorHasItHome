export const members = {
  fieldName: 'members',
  title: 'Members',
  allowMultiple: true,
  instances: [
    { id: 1, text: 'Slerne' },
    { id: 2, text: 'Tiger' },
    { id: 3, text: 'Wolff' },
    { id: 4, text: 'Nahul' },
    { id: 5, text: 'Lizzy' },
    { id: 6, text: 'Sigmend' },
    { id: 7, text: 'Yen' },
    { id: 8, text: 'Razzlen' },
    { id: 9, text: 'Whisper' },
    { id: 10, text: 'Simunas' },
    { id: 11, text: 'Freaker' },
    { id: 12, text: 'Taco' },
    { id: 13, text: 'Sand' },
    { id: 14, text: 'Puni J.' },
    { id: 15, text: 'Kaivana' },
    { id: 16, text: 'Diesel' },
    { id: 17, text: 'Lunararies' },
    { id: 18, text: 'Elvea' },
    { id: 19, text: 'Zylander' },
    { id: 20, text: 'Etick' },
    { id: 21, text: 'Flav' },
    { id: 22, text: 'Exei' },
  ],
};

export const raiders = `
<ListItem alignItems="flex-start">
<ListItemAvatar>
  <Avatar
    alt="Remy Sharp"
    src="https://render.worldofwarcraft.com/us/character/lightbringer/238/146705902-avatar.jpg"
  />
</ListItemAvatar>
<ListItemText
  primary="Tacomonde"
  secondary={
    <React.Fragment>
      <Typography
        sx={{ display: 'inline' }}
        component="span"
        variant="body2"
        color="text.primary"
      >
        <b>Active</b>
      </Typography>
      <div>
        <Checkbox {...label} defaultChecked />
        <Checkbox {...label} defaultChecked />
        <Checkbox {...label} defaultChimage.pngecked />
        <Checkbox {...label} defaultChecked />
        <Checkbox {...label} defaultChecked />
        <Checkbox {...label} defaultChecked />
      </div>
    </React.Fragment>
  }
/>
</ListItem>
<Divider variant="inset" component="li" />
`;
