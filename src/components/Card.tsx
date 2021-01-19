import * as React from 'react'; // we need this to make JSX compile
import Avatar from "@material-ui/core/Avatar";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


type CardProps = {
  title: string,
  image: string
}

export const Card = ({ title, image }: CardProps) => <aside>

  <div className="listItem">
      <Avatar src={image} />
      <h4 className="listItem__title">{title}</h4>
      <ExpandMoreIcon />
    </div>
    

</aside>

const el = <Card title="Welcome!" image="source"/>