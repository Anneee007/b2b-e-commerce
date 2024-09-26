import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <h1>Welcome to the B2B Marketplace</h1>
            <Link href="/products">View Products</Link>
        </div>
    );
}
