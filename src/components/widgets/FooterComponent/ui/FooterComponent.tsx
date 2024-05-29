import { ContainerWrapper } from '@/components/shared/ContainerWrapper'
import styles from './footerComponent.module.css'
import { CardBlock } from '@/components/shared/CardBlock'


export const FooterComponent = () => {



    return (
        <ContainerWrapper>
            <footer className={styles.footer}>
                <CardBlock href={'/about'} title={'About'} description={'About the application and manual for new users.'} />
                <CardBlock href={'/api'} title={'API'} description={'Using the API service outside the telegram interface.'} />
            </footer>
        </ContainerWrapper>

    )
}