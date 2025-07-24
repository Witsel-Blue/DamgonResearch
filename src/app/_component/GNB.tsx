import Link from 'next/link';

export default function GNB() {
    return (
        <>
            <ul>
                <li>
                    <Link href='/'>
                        홈
                    </Link>
                </li>
                <li>
                    <Link href='/about'>
                        소개        
                    </Link>
                    <ul>
                        <li>
                            <Link href='/about/greetings'>
                                인삿말
                            </Link>
                        </li>
                        <li>
                            <Link href='/about/history'>
                                연혁
                            </Link>
                        </li>
                        <li>
                            <Link href='/about/members'>
                                구성원
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link href='/archive'>
                        자료실
                    </Link>
                    <ul>
                        <li>
                            <Link href='/archive'>
                                자료실
                            </Link>
                        </li>
                        <li>
                            <Link href='/archive/gallery'>
                                포토갤러리
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link href='/news'>
                        소식
                    </Link>
                </li>
                <li>
                    <Link href='/contact'>
                        연락
                    </Link>
                </li>
            </ul>
        </>
    )
}