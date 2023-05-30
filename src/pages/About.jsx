import { Timeline } from 'flowbite-react';
import { AiOutlineUser } from 'react-icons/ai';

export default function About() {
    return (
        <div className="__page-container">
            <Timeline horizontal>
                <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                        <Timeline.Title>
                            Flowbite Library v1.0.0
                        </Timeline.Title>
                        <Timeline.Time>
                            Released on December 2, 2021
                        </Timeline.Time>
                        <Timeline.Body>
                            Get started with dozens of web components and interactive elements.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                        <Timeline.Title>
                            Flowbite Library v1.2.0
                        </Timeline.Title>
                        <Timeline.Time>
                            Released on December 23, 2021
                        </Timeline.Time>
                        <Timeline.Body>
                            Get started with dozens of web components and interactive elements.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                        <Timeline.Title>
                            Flowbite Library v1.3.0
                        </Timeline.Title>
                        <Timeline.Time>
                            Released on January 5, 2022
                        </Timeline.Time>
                        <Timeline.Body>
                            Get started with dozens of web components and interactive elements.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
            </Timeline>
        </div>
    );
} 