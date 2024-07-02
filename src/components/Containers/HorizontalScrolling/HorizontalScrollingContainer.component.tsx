import styles from './HorizontalScrollingContainer.module.css';

interface IHorizontalScrollingContainerProps {
    children: React.ReactNode;
}
function HorizontalScrollingContainer({ children }: IHorizontalScrollingContainerProps) {
    return (
        <div className={styles.horizontalScrollingContainer}>
            {children}
        </div>
    )
}

export default HorizontalScrollingContainer;